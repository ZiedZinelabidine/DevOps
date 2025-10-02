import { createSlice } from "@reduxjs/toolkit";
import { addImageURL } from "../../slice/TrainingCreation/trainingCreationSlice";

const BucketS3 = process.env.REACT_APP_AWS_S3_BUCKET;
const url_bucket = process.env.REACT_APP_URL_BUCKET;

export const UploadSlice = createSlice({
  name: "Upload",
  initialState: {
    uploading: false,
    success: false,
    error: null,
    fileUrl: "",
  },
  reducers: {
    uploadStart: (state) => {
      state.uploading = true;
      state.success = false;
      state.error = null;
    },
    uploadSuccess: (state, action) => {
      state.uploading = false;
      state.success = true;
      state.fileUrl = action.payload;
    },
    uploadFailure: (state, action) => {
      state.uploading = false;
      state.success = false;
      state.error = action.payload;
    },
  },
});

// Lazily create the S3 client
async function getS3Client() {
  const { S3Client } = await import("@aws-sdk/client-s3");
  let s3Config = {
    region: process.env.REACT_APP_AWS_S3_REGION, // AWS region
    credentials: {
      accessKeyId: process.env.REACT_APP_AWS_S3_ACCESSKEYID,
      secretAccessKey: process.env.REACT_APP_AWS_S3_SECRETACCESSKEY,
    },
    useAccelerateEndpoint: true // Use the S3 accelerate endpoint if needed
  };
  
  return new S3Client(s3Config);
}

// Function to list objects in a specified S3 location
export const listObjectsV2Command = async (location) => {
  const { ListObjectsV2Command } = await import("@aws-sdk/client-s3");
  const s3 = await getS3Client();
  const listCommand = new ListObjectsV2Command({
    Bucket: BucketS3,
    Prefix: location,
  });
  return await s3.send(listCommand);
};

export const deleteVideo = async (pathVideo) => {
  const { DeleteObjectCommand } = await import("@aws-sdk/client-s3");
  const s3 = await getS3Client();
  try {
    const deleteParams = {
      Bucket: BucketS3,
      Key: pathVideo,
    };
    await s3.send(new DeleteObjectCommand(deleteParams));
    console.log(`Deleted old profile: ${pathVideo}`);
  } catch (error) {
    console.error('Error deleting old profiles:', error);
  }
};

export const deleteOldProfil = async (listBackup) => {
  const { DeleteObjectCommand } = await import("@aws-sdk/client-s3");
  const s3 = await getS3Client();

  if (!listBackup || !listBackup.Contents || listBackup.Contents.length === 0) {
    console.log('No old profiles found to delete.');
    return;
  }

  try {
    for (const file of listBackup.Contents) {
      const deleteParams = {
        Bucket: BucketS3,
        Key: file.Key,
      };
      await s3.send(new DeleteObjectCommand(deleteParams));
      console.log(`Deleted old profile: ${file.Key}`);
    }
  } catch (error) {
    console.error('Error deleting old profiles:', error);
  }
};

// Function to fetch the presigned URL for uploading a specific part
async function fetchPresignedUrl(fileName, partNumber, uploadId) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}s3/getuploadurl`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fileName, partNumber, uploadId }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch presigned URL');
  }
  const data = await response.json();
  return data.url; // Assumes the server returns { url: "presigned-url" }
}

const UploadToS3MultiPart = async (file, type, metadata, location) => {
  const bucketName = BucketS3;
  const chunkSize = 50 * 1024 * 1024; // 50MB
  const totalParts = Math.ceil(file.size / chunkSize);
  const parts = [];

  const listBackup = await listObjectsV2Command(`${location}${type}`);
  await deleteOldProfil(listBackup);
  const sanitizedFileName = sanitizeFileName(file.name);

  let uploadId;
  try {
    uploadId = await createMultipartUpload(sanitizedFileName, type, metadata, location);

    for (let i = 0; i < totalParts; i++) {
      const start = i * chunkSize;
      const end = Math.min(start + chunkSize, file.size);
      const blob = file.slice(start, end);

      console.log(`Preparing to upload part ${i + 1} of ${totalParts}. Blob size: ${blob.size}`);

      const presignedUrl = await fetchPresignedUrl(`${location}${type}${sanitizedFileName}`, i + 1, uploadId);

      let attempt = 0;
      const maxRetries = 3;
      while (attempt < maxRetries) {
        try {
          const response = await fetch(presignedUrl, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/octet-stream' },
            body: blob,
          });

          if (!response.ok) {
            throw new Error(`Failed to upload part ${i + 1}, status: ${response.status}`);
          }

          const ETag = response.headers.get('ETag');
          console.log(`Uploaded part ${i + 1}. ETag: ${ETag}`);
          parts.push({ ETag, PartNumber: i + 1 });
          sessionStorage.setItem(`upload_part_${i + 1}`, JSON.stringify({ ETag, PartNumber: i + 1 }));
          break;
        } catch (uploadError) {
          attempt++;
          console.error(`Attempt ${attempt} failed for part ${i + 1}:`, uploadError);
          if (attempt === maxRetries) {
            throw new Error(`All attempts failed for part ${i + 1}`);
          }
          await new Promise(res => setTimeout(res, 1000 * Math.pow(2, attempt))); // Exponential backoff
        }
      }
    }

    console.log("Parts for completion:", parts.map(p => ({ PartNumber: p.PartNumber, ETag: p.ETag })));

    const { CompleteMultipartUploadCommand } = await import("@aws-sdk/client-s3");
    const s3 = await getS3Client();
    const completeCommand = new CompleteMultipartUploadCommand({
      Bucket: bucketName,
      Key: `${location}${type}${sanitizedFileName}`,
      UploadId: uploadId,
      MultipartUpload: { Parts: parts },
    });

    await s3.send(completeCommand);
    console.log("Upload finished successfully.");

    for (let i = 0; i < totalParts; i++) {
      sessionStorage.removeItem(`upload_part_${i + 1}`);
    }

    return `https://${bucketName}.s3.amazonaws.com/${location}${type}${sanitizedFileName}`;
  } catch (error) {
    console.error("Error during multipart upload:", error);

    if (uploadId) {
      try {
        await abortMultipartUpload(uploadId, sanitizedFileName, location, type);
      } catch (abortError) {
        console.error("Error aborting multipart upload:", abortError);
      }
    }

    throw error;
  }
};

const sanitizeFileName = (name) => {
  return name.replace(/[^a-z0-9_\-\.]/gi, '_');
};

const UploadToS3OnePart = async (file, type, base64URL, location) => {
  const { PutObjectCommand } = await import("@aws-sdk/client-s3");
  const s3 = await getS3Client();

  const list = await listObjectsV2Command(location + type);
  await deleteOldProfil(list);

  const sanitizedFileName = sanitizeFileName(file.name);
  const base64Data = base64URL.split(',')[1];
  const binaryData = base64ToUint8Array(base64Data);

  const command = new PutObjectCommand({
    Bucket: BucketS3,
    Key: `${location}${type}${sanitizedFileName}`,
    Body: binaryData,
    ContentDisposition: "inline",
    ContentType: file.type,
    ContentEncoding: "base64",
  });

  try {
    await s3.send(command);
  } catch (err) {
    console.error("Error uploading to S3:", err);
    throw err;
  }

  return `${url_bucket}${location}${type}${sanitizedFileName}`;
};

async function abortMultipartUpload(uploadId, fileName, location, type) {
  const { AbortMultipartUploadCommand } = await import("@aws-sdk/client-s3");
  const s3 = await getS3Client();
  const command = new AbortMultipartUploadCommand({
    Bucket: BucketS3,
    Key: `${location}${type}${fileName}`,
    UploadId: uploadId,
  });

  await s3.send(command);
  console.log("Multipart upload aborted due to error.");
}

async function createMultipartUpload(fileName, type, metadata, location) {
  const { CreateMultipartUploadCommand } = await import("@aws-sdk/client-s3");
  const s3 = await getS3Client();
  const command = new CreateMultipartUploadCommand({
    Bucket: BucketS3,
    Key: `${location}${type}${fileName}`,
    ContentType: "application/octet-stream",
    Metadata: metadata,
  });

  const { UploadId } = await s3.send(command);
  return UploadId;
}

// Redux action creators
export const { uploadStart, uploadSuccess, uploadFailure } = UploadSlice.actions;

// Function to handle S3 uploads
export const s3Upload =
  ({ file, type, base64URL, location, metadata, onepart = false }) =>
  async (dispatch) => {
    dispatch(uploadStart());
    try {
      let imageUrl;
      if (!onepart) {
        imageUrl = await UploadToS3MultiPart(file, type, metadata, location);
      } else {
        imageUrl = await UploadToS3OnePart(file, type, base64URL, location);
      }
      dispatch(uploadSuccess(imageUrl));
      dispatch(addImageURL(imageUrl));
    } catch (error) {
      dispatch(uploadFailure(error.message));
    }
  };

// Function to create and send GetObjectTaggingCommand
export const getTitleVideo = async (objectKey) => {
  const { GetObjectTaggingCommand } = await import("@aws-sdk/client-s3");
  const s3 = await getS3Client();
  const tagCommand = new GetObjectTaggingCommand({
    Bucket: BucketS3,
    Key: objectKey,
  });
  const tags = await s3.send(tagCommand);
  return tags.TagSet[0]?.Value || null;
};

const base64ToUint8Array = (base64) => {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
};

// Function to get objects from S3
export const getURL =
  ({ location }) =>
  async (dispatch) => {
    const list = await listObjectsV2Command(location);
    return list;
  };

// Function to get a file from S3
export const getFileFromS3 = async (fileKey) => {
  const { GetObjectCommand } = await import("@aws-sdk/client-s3");
  const s3 = await getS3Client();
  try {
    const params = {
      Bucket: BucketS3,
      Key: fileKey,
    };
    const data = await s3.send(new GetObjectCommand(params));
    const fileBlob = new Blob([await streamToBuffer(data.Body)], { type: data.ContentType });
    const file = new File([fileBlob], data.ContentLength || fileKey, { type: data.ContentType });
    return file;
  } catch (error) {
    console.error("Error getting file from S3:", error);
    throw error;
  }
};

// Helper function to convert ReadableStream to Buffer
const streamToBuffer = async (stream) => {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
};

// Function to get object tags from S3
export const getObjectTags = async (objectKey) => {
  const { GetObjectTaggingCommand } = await import("@aws-sdk/client-s3");
  const s3 = await getS3Client();
  try {
    const command = new GetObjectTaggingCommand({
      Bucket: BucketS3,
      Key: objectKey,
    });
    const data = await s3.send(command);
    console.log("tags", data.TagSet.map((tag) => tag.Value));
    return data.TagSet.map((tag) => tag.Value);
  } catch (error) {
    console.error("Error getting object tags:", error);
    return [];
  }
};

// Function to check if a folder is empty in S3
export const checkIfFolderIsEmpty = async (prefix) => {
  const { ListObjectsV2Command } = await import("@aws-sdk/client-s3");
  const s3 = await getS3Client();
  try {
    const command = new ListObjectsV2Command({
      Bucket: BucketS3,
      Prefix: prefix,
      MaxKeys: 1,
    });
    const response = await s3.send(command);
    return response.Contents.length === 0;
  } catch (error) {
    console.error("Error checking if folder is empty:", error);
    return false;
  }
};

export const copyFilesRecursively = async (sourcePrefix, destinationPrefix) => {
  const { ListObjectsV2Command, CopyObjectCommand } = await import("@aws-sdk/client-s3");
  const s3 = await getS3Client();
  
  try {
    const folderData = await s3.send(
      new ListObjectsV2Command({
        Bucket: BucketS3,
        Prefix: sourcePrefix,
      })
    );

    if (!folderData.Contents || folderData.Contents.length === 0) {
      return;
    }

    for (const item of folderData.Contents) {
      const sourceKey = item.Key;
      const destinationKey = sourceKey.replace(sourcePrefix, destinationPrefix);

      await s3.send(
        new CopyObjectCommand({
          Bucket: BucketS3,
          CopySource: `${BucketS3}/${sourceKey}`,
          Key: destinationKey,
        })
      );
    }
  } catch (error) {
    console.error("Error copying files: ", error);
  }
};

export default UploadSlice.reducer;
