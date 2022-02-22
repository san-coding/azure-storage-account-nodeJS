const { BlobServiceClient } = require("@azure/storage-blob");
require("dotenv").config();

async function main() {
  console.log("Azure Blob storage v12 - JavaScript quickstart sample");
  const AZURE_STORAGE_CONNECTION_STRING =
    process.env.AZURE_STORAGE_CONNECTION_STRING;

  const blobServiceClient = BlobServiceClient.fromConnectionString(
    AZURE_STORAGE_CONNECTION_STRING
  );

  // Create a unique name for the container
  const containerName = "mysamplecontainer-cse19650";
  const containerClient = blobServiceClient.getContainerClient(containerName);

  // upload image.png to the blob

  const imagePath = "./image.png";
  const imageName = "image.png";
  const imageBlobClient = containerClient.getBlockBlobClient(imageName);
  const uploadBlobResponse = await imageBlobClient.upload(
    imagePath,
    imagePath.length
  );
  console.log(
    "Blob was uploaded successfully. requestId: ",
    uploadBlobResponse.requestId
  );

  // upload image1.png to the blob

  const imagePath1 = "./image1.png";
  const imageName1 = "image1.png";
  const imageBlobClient1 = containerClient.getBlockBlobClient(imageName1);
  const uploadBlobResponse1 = await imageBlobClient1.upload(
    imagePath1,
    imagePath1.length
  );
  console.log(
    "Blob was uploaded successfully. requestId: ",
    uploadBlobResponse1.requestId
  );
}

main()
  .then(() => console.log("Done"))
  .catch((ex) => console.log(ex.message));
