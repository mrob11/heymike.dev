import React from "react"
import Head from "next/head"
import client from "../lib/contentful"
import Author from "../components/Author"
import PostList from "../components/PostList"

export default function Index({ posts, author }) {
  return (
    <>
      <Head>
        <title>Hey Mike — A blog by Mike Robinson</title>
      </Head>
      <Author
        name={author.fields.name}
        title={author.fields.title}
        avatar={author.fields.avatar.fields.file.url}
      />
      <PostList posts={posts} />
      <img src="/mstile-150x150.png" />
    </>
  )
}

export async function getStaticProps(context) {
  const posts = await client
    .getEntries({ content_type: "blogPost" })
    .then((response) => response.items)
  const author = await client.getEntry("47Ep8zzZhhvWSCloWxS3T5")

  return {
    props: {
      posts,
      author,
    },
  }
}
