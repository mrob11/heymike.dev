import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import AuthorInfo from "./author-info"
import "./global.css"

const Layout = ({ children, heroImageData }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            author
            title
          }
        }
        contentfulPerson(id: { eq: "905350f3-d9b9-5074-9ec9-94d857ee9c17" }) {
          email
          github
          twitter
          linkedIn
          instagram
          shortBio {
            shortBio
          }
          name
          image {
            fixed(quality: 90, width: 100, height: 100) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title },
      },
      contentfulPerson: author,
    }) => {
      return (
        <>
          <Header siteTitle={title} />
          <div>{children}</div>
          <AuthorInfo author={author} />
          <footer className="bg-gray-800 text-gray-100 py-8 md:py-16 text-center text-sm">
            © {author.name} {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
