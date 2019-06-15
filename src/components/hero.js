import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Tag from "./tag"

export default function Hero({ post }) {
  return (
    <BackgroundImage
      fluid={post.heroImage.fluid}
      tag="section"
      className="h-screen w-screen relative z-0 bg-fixed mb-16"
    >
      <section
        className="px-4 md:px-0 text-white w-full h-full flex-1 flex flex-col justify-center items-center"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,.9) 100%)",
        }}
      >
        <div className="container mx-auto text-left md:px-32 lg:px-48 text-shadow">
          <h1 className="font-bold text-3xl mb-8 md:text-4xl xl:text-6xl leading-tight tracking-tight">
            <Link to={`/posts/${post.slug}#post`}>{post.title}</Link>
          </h1>
          <div className="flex flex-row justify-start mb-8 flex-wrap">
            <time className="inline-block text-gray-200 mr-4 md:mr-16">
              {post.publishDate}
            </time>
            <span className="inline-block text-gray-200 mr-4 md:mr-16">
              Posted under:{" "}
              {post.tags.map(tag => (
                <Tag key={tag.slug} tag={tag} />
              ))}
            </span>
          </div>
          <p className="md:text-lg lg:text-xl mb-8">
            {post.description.description}
          </p>
          <Link
            to={`/posts/${post.slug}#post`}
            className="py-1 px-4 rounded border-2 border-white text-white inline-block"
          >
            Read More
          </Link>
        </div>
      </section>
    </BackgroundImage>
  )
}

Hero.propTypes = {
  post: PropTypes.object.isRequired,
  readMore: PropTypes.string,
}

Hero.defaultProps = {
  readMore: "#start",
}
