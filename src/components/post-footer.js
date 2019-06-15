import React from "react"
import { Link } from "gatsby"

export default function PostFooter({ post }) {
  return (
    <footer className="border-gray-200 border-t mt-8 pt-8 italic text-gray-500">
      <p>
        Posted on <time>{post.publishDate}</time>. Tagged in{" "}
        {post.tags.map(tag => (
          <Link to={`/tags/${tag.slug}`}>{tag.name}</Link>
        ))}
        .
      </p>
    </footer>
  )
}
