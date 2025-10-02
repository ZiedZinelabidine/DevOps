export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    if (!file || !(file instanceof Blob)) {
      return reject(new TypeError("Parameter must be a valid Blob or File."));
    }

    const reader = new FileReader();
    reader.readAsDataURL(file); // This will read the file as a base64 string

    reader.onload = () => {
      // Resolve with the Base64 string
      resolve(reader.result); // Now reader.result contains the Base64 data URL
    };

    reader.onerror = (error) => {
      reject(error); // Reject if there's an error
    };
  });
};

export const extractFileAttributes = (fileBlob, fileKey) => {
  const file = new File([fileBlob], fileKey.split("/").pop(), {
    type: fileBlob.type,
  });

  const fileAttributes = {
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.name,
    size: file.size,
    type: fileBlob.type,
    webkitRelativePath: file.webkitRelativePath || "",
  };

  return fileAttributes;
};

export const s3UrlToFile = async (url, fileName, mimeType) => {
  try {
    // Fetch the file from the S3 URL
    const response = await fetch(url);

    if (!response.ok) {
    }

    // Convert response to Blob
    const blob = await response.blob();

    // Optionally read the content as DataURL using FileReader
    // Useful if you need the Base64 representation for any reason
    const fileReader = new FileReader();
    fileReader.readAsDataURL(blob);

    const fileResult = await new Promise((resolve, reject) => {
      fileReader.onloadend = () => resolve(fileReader.result);
      fileReader.onerror = reject;
    });

    // Convert the Blob to a File object
    const file = new File([blob], fileName || "downloadedFile", {
      type: mimeType || blob.type,
    });

    return { file, fileResult };
  } catch (error) {
    console.error("Error fetching or processing URL:", error);
    return null;
  }
};


export const base64ToFile = async (base64String, filename) => {
  // Split the base64 string into two parts: the metadata and the actual data
  const [metadata, base64Data] = base64String.split(',');

  // Decode the base64 data
  const binaryString = atob(base64Data);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);

  // Convert binary string to byte array
  for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
  }

  // Create a Blob from the byte array
  const blob = new Blob([bytes], { type: metadata.match(/:(.*?);/)[1] }); // Extract the MIME type

  // Create a File from the Blob with the given filename
  const file = new File([blob], filename, { type: blob.type });

  return file;
}
