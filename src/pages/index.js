import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/post-preview"

export default function IndexPage({ data }) {
  const posts = data.allContentfulBlogPost.edges.slice(1)
  const first = { ...data.allContentfulBlogPost.edges.slice(0, 1).pop().node }

  return (
    <Layout>
      <SEO title="Home" />
      <Hero post={first} readMore={`/posts/${first.slug}`} />
      <div className="container mx-auto flex flex-row flex-wrap md:px-32 lg:px-48">
        {posts.map(({ node: post }) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query IndexPageQuery {
    allContentfulBlogPost(
      limit: 10
      sort: { fields: publishDate, order: DESC }
    ) {
      edges {
        node {
          description {
            description
          }
          id
          slug
          publishDate(formatString: "MMM D, YYYY")
          title
          heroImage {
            fixed(quality: 90, width: 200, height: 200) {
              ...GatsbyContentfulFixed_withWebp
            }
            fluid(quality: 90, maxWidth: 2160) {
              ...GatsbyContentfulFluid_withWebp
            }
          }

          tags {
            name
            slug
          }
        }
      }
    }
  }
`
