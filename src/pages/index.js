import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

export default function IndexPage({ data }) {
  const posts = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <SEO title="Home" />
      <section className="posts">
        {posts.map(({ node: post }) => (
          <article className="post" key={post.id}>
            <h1 className="text-gray-800 text-3xl">
              <Link to={`/posts/${post.slug}`}>{post.title}</Link>
            </h1>
            <section className="excerpt">
              {post.description.description}
            </section>
          </article>
        ))}
      </section>
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
          tags
        }
      }
    }
  }
`
