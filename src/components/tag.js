import React from "react"
import { Link } from "gatsby"

export default function Tag({ tag }) {
  return (
    <Link
      to={`/tags/${tag.slug}`}
      className="text-white rounded-lg px-2 text-sm py-1"
      style={{ backgroundColor: "rgba(76, 81, 191, 0.6)" }}
    >
      {tag.name}
    </Link>
  )
}
