import React from "react"
import Tag from "./tag"
import { Link } from "gatsby"

export default function PostPreview({ post }) {
  return (
    <article className="mb-16 mx-4 lg:mx-0">
      <h1 className="font-bold text-3xl leading-normal tracking-tight mt-0 mb-4">
        <Link to={`/posts/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="flex flex-row justify-start mb-8">
        <time className="uppercase inline-block text-gray-400 mr-4 md:mr-16">
          {post.publishDate}
        </time>
        <span className="inline-block text-gray-400">
          Posted under:{" "}
          {post.tags.map(tag => (
            <Tag key={tag.slug} tag={tag} />
          ))}
        </span>
      </div>
      <p className="mb-4">{post.description.description}</p>
      <Link
        to={`/posts/${post.slug}`}
        className="py-1 px-4 rounded border-2 border-indigo-400 text-indigo-400 inline-block"
      >
        Read More
      </Link>
    </article>
  )
}
