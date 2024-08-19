import { defineEventHandler, readMultipartFormData } from 'h3'

export default defineEventHandler(async (event) => {
  const webhookUrl = 'https://hooks.zapier.com/hooks/catch/14797557/22i6enw/'

  try {
    const parts = await readMultipartFormData(event)
    let lead = {}

    if (parts) {
      for (const part of parts) {
        if (part.name) {
          if (part.filename) {
            // This is the file
            lead[part.name] = {
              filename: part.filename,
              mimeType: part.type,
              data: part.data.toString('base64') // Convert file data to base64
            }
          } else {
            // These are regular form fields
            lead[part.name] = part.data.toString()
          }
        }
      }
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ lead })
    })

    const data = await response.json()
    return data
  } catch (error) {
    if (event.node && event.node.res) {
      event.node.res.statusCode = 500
    }
    return {
      error: 'Error forwarding request',
      details: error instanceof Error ? error.message : 'Unknown error'
    }
  }
})