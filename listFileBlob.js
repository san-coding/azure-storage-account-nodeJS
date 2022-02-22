require("dotenv").config();

const { BlobServiceClient } = require("@azure/storage-blob");

const account = "mysamplecontainer-cse19650";

const AZURE_STORAGE_CONNECTION_STRING =
  process.env.AZURE_STORAGE_CONNECTION_STRING;

const blobServiceClient = BlobServiceClient.fromConnectionString(
  AZURE_STORAGE_CONNECTION_STRING
);

const containerClient = blobServiceClient.getContainerClient(account);

async function main() {
  let i = 1;
  let blobs = containerClient.listBlobsFlat();
  for await (const file of blobs) {
    console.log(`File ${i++}: ${file.name} from container ${account}`);
  }
}

main();
