import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const webhookUrl = 'https://hooks.zapier.com/hooks/catch/14797557/2oqj0p4/'
  const headers = { 'Content-Type': 'application/json' }

  try {
    const body = await readBody(event)
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })

    const data = await response.json()
    return data
  } catch (error) {
    event.node.res.statusCode = 500
    return {
      error: 'Error forwarding request',
      details: error.message
    }
  }
})