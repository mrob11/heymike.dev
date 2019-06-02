import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import TagList from "../components/tag-list"

export default function Post({ data }) {
  const { title, body } = data.contentfulBlogPost
  return (
    <Layout>
      <SEO title={title} />
      <article className="post">
        <h1>{title}</h1>
        {/* <TagList tags={tags} /> */}
        <section
          className="body"
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
        />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
      tags
    }
  }
`
