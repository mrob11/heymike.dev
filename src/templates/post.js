import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Container from "../components/container"
import PostFooter from "../components/post-footer"

export default function Post({ data: { contentfulBlogPost: post } }) {
  return (
    <Layout heroImageData={post.heroImage.fluid}>
      <SEO title={post.title} />
      <Hero post={post} readMore={`/posts/${post.slug}#post`} />
      <Container>
        <article className="post" id="post">
          <section
            className="body"
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
          <PostFooter post={post} />
        </article>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      author {
        name
      }
      description {
        description
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      tags {
        slug
        name
      }
      publishDate(formatString: "MMM D, YYYY")
      heroImage {
        fluid(quality: 90, maxWidth: 2160) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
