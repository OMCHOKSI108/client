import { Client, Databases, ID } from 'appwrite';

// Initialize Appwrite client
const client = new Client();
client
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject('681364a5001f94f6a006');

// Initialize Databases service
const databases = new Databases(client);

// Database and collection IDs
export const DATABASE_ID = '68136514003b268a99cd';
export const COLLECTION_ID = '68136525001a99dcb7c5';

export { client, databases, ID }; 