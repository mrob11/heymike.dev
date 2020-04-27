import getClient from "../../lib/contentful"

export default async (req, res) => {
  if (req.query.secret !== process.env.PREVIEW_SECRET || !req.query.slug) {
    return res.status(401).json({ message: "Invalid token" })
  }

  const client = getClient(true)
  const result = await client
    .getEntries({
      content_type: "blogPost",
      "fields.slug": req.query.slug,
    })
    .then((response) => response.items)
  const post = result.pop()

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!post) {
    return res.status(401).json({ message: "Invalid slug" })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/post/${req.query.slug}` })
  res.end()
}
