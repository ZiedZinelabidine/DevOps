const { S3Client, CreateMultipartUploadCommand, CompleteMultipartUploadCommand, UploadPartCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
require('dotenv').config();

// Create an S3 client
const s3 = new S3Client({ 
    region: process.env.REGION, // e.g., 'us-east-1'
    useAccelerateEndpoint: true,
    credentials: 
         {
            accessKeyId: process.env.ACCESSKEYID,
            secretAccessKey: process.env.SECRETACCESSKEY
          }
});

// Start multipart upload
exports.startMultipartUpload = async (req, res) => {
    const { fileName } = req.body;

    const params = {
        Bucket: process.env.BUCKET,
        Key: fileName,
        ContentType: 'application/octet-stream',
    };
  
    try {
        const command = new CreateMultipartUploadCommand(params);
        const { UploadId } = await s3.send(command);
        res.json({ uploadId: UploadId });
    } catch (error) {
        console.error('Error creating multipart upload:', error);
        res.status(500).send('Failed to initiate multipart upload');
    }
}

// Get presigned URL for uploading a part
exports.getUploadPartUrl = async (req, res) => {
    const { fileName, partNumber, uploadId } = req.body;

    const params = {
        Bucket: process.env.BUCKET,
        Key: fileName,
        PartNumber: partNumber,
        UploadId: uploadId,
    };
    
    try {
        const command = new UploadPartCommand(params);
        const url = await getSignedUrl(s3, command, { expiresIn: 3600 });

        res.json({ url });
    } catch (error) {
        console.error('Error creating presigned URL:', error);
        res.status(500).json({ error: 'Failed to create presigned URL' });
    }
}

// Complete multipart upload
exports.completeMultipartUpload = async (req, res) => {
    const { fileName, uploadId, parts } = req.body;

    const params = {
        Bucket: process.env.BUCKET,
        Key: fileName,
        UploadId: uploadId,
        MultipartUpload: {
            Parts: parts,
        },
    };
    try {
        const command = new CompleteMultipartUploadCommand(params);
        await s3.send(command);
        res.json({ message: 'Upload completed successfully' });
    } catch (error) {
        console.error('Error completing multipart upload:', error);
        res.status(500).json({ error: 'Failed to complete upload' });
    }
}