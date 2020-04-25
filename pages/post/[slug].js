import React from "react"
import Head from "next/head"
import Markdown from "react-markdown"
import client from "../../lib/contentful"
import PostDate from "../../components/PostDate"
import Author from "../../components/Author"

export default function Post({ post }) {
  return (
    <>
      <Head>
        <title>{post.fields.title} | Hey Mike</title>
      </Head>
      <article>
        <header>
          <h1>{post.fields.title}</h1>
          <PostDate date={post.fields.publishDate} />
        </header>
        <section>
          <Markdown source={post.fields.body} escapeHtml={true} />
        </section>
        <footer>
          <Author
            name="Mike Robinson"
            title="I build apps and stuff for the web."
            avatar="https://avatars2.githubusercontent.com/u/243422?s=460&v=4"
          />
        </footer>
        <style jsx>{`
          header h1 {
            font-family: "Passion One", sans-serif;
            font-size: 3rem;
            font-weight: 400;
          }
          section :global(p) {
            line-height: 1.75rem;
            margin-bottom: 2rem;
          }
          section :global(img) {
            max-width: 100%;
          }
          section :global(blockquote) {
            border-left: 0.5rem solid #949499;
            margin-left: 0;
            padding: 0 2rem;
            color: #646469;
          }
          section :global(code) {
            background: #fff6de;
            padding: 0 0.1rem;
            border-radius: 0.2rem;
          }
        `}</style>
      </article>
    </>
  )
}

export async function getStaticProps(context) {
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
  const posts = await client
    .getEntries({ content_type: "blogPost" })
    .then((response) => response.items)
  const paths = posts.map(({ fields: { slug } }) => ({ params: { slug } }))
  return {
    paths,
    fallback: true,
  }
}
