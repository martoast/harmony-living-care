import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

export default defineEventHandler(async (event) => {
  console.log('Received request to create Google Drive folder');

  const config = useRuntimeConfig();
  const google_api_credentials = config.public.GOOGLE_SHEETS_API_CREDENTIALS;

  // Parse the credentials from the environment variable
  let credentials;
  try {
    credentials = JSON.parse(google_api_credentials);
  } catch (error) {
    console.error('Error parsing credentials:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Error parsing GOOGLE_SHEETS_API_CREDENTIALS',
    });
  }

  // Create a new JWT client using the credentials
  const jwtClient = new JWT(
    credentials.client_email,
    null,
    credentials.private_key.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/drive']
  );

  try {
    // Authorize the client
    await jwtClient.authorize();
    
    // Create a new Drive instance
    const drive = google.drive({ version: 'v3', auth: jwtClient });
    
    // Parse the request body
    const rawBody = await readBody(event);
    
    // Parse the JSON string
    const body = JSON.parse(rawBody);
    
    // Extract folder name and parent folder ID from the request
    const { folderName, parentFolderId } = body;

    if (!folderName) {
      console.error('Folder name is missing from the request');
      throw createError({
        statusCode: 400,
        statusMessage: 'Folder name is required',
      });
    }

    // Create the folder
    const folderMetadata = {
      name: folderName,
      mimeType: 'application/vnd.google-apps.folder',
      parents: parentFolderId ? [parentFolderId] : []
    };

    const folder = await drive.files.create({
      resource: folderMetadata,
      fields: 'id'
    });

    return { message: 'Folder created successfully', folderId: folder.data.id };
  } catch (error) {
    console.error('Error details:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Error creating folder',
      data: error.message,
    });
  }
});