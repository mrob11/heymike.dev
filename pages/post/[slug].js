import React from "react"
import Head from "next/head"
import ErrorPage from "next/error"
import { useRouter } from "next/router"
import getClient from "../../lib/contentful"
import Post from "../../components/Post"

export default function PostBySlug({ post }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading ...</div>
  }

  if (!post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{post.fields.title} — Hey Mike</title>
        <meta name="title" content={post.fields.title} />
        <meta name="description" content={post.fields.description} />
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

  if (!post) {
    return { props: {} }
  }

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
    fallback: true,
  }
}
