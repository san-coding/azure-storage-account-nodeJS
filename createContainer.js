const { BlobServiceClient } = require('@azure/storage-blob');
require('dotenv').config();


async function main() {
    console.log('Azure Blob storage v12 - JavaScript quickstart sample');
    const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
    
    const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);

// Create a unique name for the container
    const containerName = 'mysamplecontainer-cse19650';

    console.log('\t', containerName);

// Get a reference to a container
    const containerClient = blobServiceClient.getContainerClient(containerName);

// Create the container
    const createContainerResponse = await containerClient.create();
    console.log("Container was created successfully. requestId: ", createContainerResponse.requestId);

}

main().then(() => console.log('Done')).catch((ex) => console.log(ex.message));