import React from "react"
import Head from "next/head"
import client from "../lib/contentful"
import Author from "../components/Author"
import PostList from "../components/PostList"

export default function Index({ posts = [] }) {
  return (
    <>
      <Head>
        <title>Hey Mike — A blog by Mike Robinson</title>
      </Head>
      <Author
        name="Mike Robinson"
        title="I build apps and stuff for the web."
        avatar="https://avatars2.githubusercontent.com/u/243422?s=460&v=4"
      />
      <PostList posts={posts} />
    </>
  )
}

export async function getStaticProps(context) {
  const posts = await client
    .getEntries({ content_type: "blogPost" })
    .then((response) => response.items)

  return {
    props: {
      posts,
    },
  }
}
