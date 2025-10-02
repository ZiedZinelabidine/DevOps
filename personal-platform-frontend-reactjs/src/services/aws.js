// Import only the specific AWS clients we need
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";

// Initialize clients lazily
let s3Client = null;
let cognitoClient = null;

// Lazy initialization of S3 client
export const getS3Client = async () => {
  if (!s3Client) {
    s3Client = new S3Client({
      region: process.env.REACT_APP_AWS_REGION,
      credentials: await fromCognitoIdentityPool({
        client: new CognitoIdentityClient({
          region: process.env.REACT_APP_AWS_REGION,
        }),
        identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
      }),
    });
  }
  return s3Client;
};

// Lazy initialization of Cognito client
export const getCognitoClient = () => {
  if (!cognitoClient) {
    cognitoClient = new CognitoIdentityClient({
      region: process.env.REACT_APP_AWS_REGION,
    });
  }
  return cognitoClient;
};

// Export specific operations instead of entire clients
export const uploadToS3 = async (file, key) => {
  const client = await getS3Client();
  const command = new PutObjectCommand({
    Bucket: process.env.REACT_APP_S3_BUCKET,
    Key: key,
    Body: file,
  });
  return client.send(command);
};

// Add more specific operations as needed
