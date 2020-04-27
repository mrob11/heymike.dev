import React from "react"
import Head from "next/head"
import getClient from "../../lib/contentful"
import Post from "../../components/Post"

export default function PostBySlug({ post }) {
  return (
    <>
      <Head>
        <title>{post.fields.title} — Hey Mike</title>
      </Head>
      <Post post={post} />
    </>
  )
}

export async function getStaticProps(context) {
  const client = getClient(context.preview)
  const result = await client
    .getEntries({
      content_type: "blogPost",
      "fields.slug": context.params.slug,
    })
    .then((response) => response.items)
  const post = result.pop()

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const client = getClient()
  const posts = await client
    .getEntries({ content_type: "blogPost" })
    .then((response) => response.items)
  const paths = posts.map(({ fields: { slug } }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
