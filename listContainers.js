require("dotenv").config();

const { BlobServiceClient } = require("@azure/storage-blob");

const account = "mysamplecontainer-cse19650";

const AZURE_STORAGE_CONNECTION_STRING =
  process.env.AZURE_STORAGE_CONNECTION_STRING;

const blobServiceClient = BlobServiceClient.fromConnectionString(
  AZURE_STORAGE_CONNECTION_STRING
);

async function main() {
  let i = 1;
  let containers = blobServiceClient.listContainers();
  for await (const container of containers) {
    console.log(`Container ${i++} name : ${container.name}`);
  }
}

main();
