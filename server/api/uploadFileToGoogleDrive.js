import { google } from 'googleapis';
import { JWT } from 'google-auth-library';
import { Readable } from 'stream';

export default defineEventHandler(async (event) => {

  const config = useRuntimeConfig();
  const google_api_credentials = config.public.GOOGLE_SHEETS_API_CREDENTIALS;

  let credentials;
  try {
    credentials = JSON.parse(google_api_credentials);
  } catch (error) {
    console.error('Error parsing credentials:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Error parsing GOOGLE_SHEETS_API_CREDENTIALS',
      data: error.message,
    });
  }

  const jwtClient = new JWT(
    credentials.client_email,
    null,
    credentials.private_key.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/drive.file']
  );

  try {
    await jwtClient.authorize();
    
    const drive = google.drive({ version: 'v3', auth: jwtClient });
    
    // Parse the request body
    const rawBody = await readBody(event);
    
    // Parse the JSON string
    const body = JSON.parse(rawBody);
    
    const { fileName, fileContent, folderId } = body;

    if (!fileName || !fileContent || !folderId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'fileName, fileContent, and folderId are required',
      });
    }

    // Decode base64 content
    const buffer = Buffer.from(fileContent, 'base64');

    // Create a readable stream from the buffer
    const bufferStream = new Readable();
    bufferStream.push(buffer);
    bufferStream.push(null);

    const fileMetadata = {
      name: fileName,
      parents: [folderId]
    };

    const media = {
      mimeType: 'application/octet-stream',
      body: bufferStream
    };

    const file = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: 'id'
    });

    return { message: 'File uploaded successfully', fileId: file.data.id };
  } catch (error) {
    console.error('Error details:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Error uploading file',
      data: error.message,
    });
  }
});