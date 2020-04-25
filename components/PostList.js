import React from "react"
import Link from "next/link"
import PostDate from "../components/PostDate"

export default function PostList({ posts = [] }) {
  return (
    <section>
      {posts.map((post) => (
        <article key={post.id}>
          <header>
            <h1>
              <Link href={`/post/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </h1>
            <PostDate date={post.publishDate} />
          </header>
          <p>{post.description}</p>
        </article>
      ))}
      <style jsx>{`
        h1 {
          margin: 0 0 0.75rem;
          font-size: 2.5rem;
          font-family: "Passion One", sans-serif;
          font-weight: 400;
        }
        h1 a {
          text-decoration: none;
        }
        p {
          line-height: 1.75rem;
        }
        article {
          margin: 2rem 0;
        }
      `}</style>
    </section>
  )
}
