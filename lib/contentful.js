const contentful = require("contentful")

export default function getClient(preview = false) {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: preview
      ? process.env.CONTENTFUL_PREVIEW_TOKEN
      : process.env.CONTENTFUL_ACCESS_TOKEN,
    host: preview ? "preview.contentful.com" : "cdn.contentful.com",
  })
  return client
}
