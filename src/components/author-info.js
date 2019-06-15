import React from "react"
import Image from "gatsby-image"
import IconLink from "./icon-link"
import GitHubIcon from "../images/github.inline.svg"
import LinkedInIcon from "../images/linkedin.inline.svg"
import InstagramIcon from "../images/instagram.inline.svg"
import TwitterIcon from "../images/twitter.inline.svg"

export default function AuthorInfo({ author }) {
  return (
    <section className="px-4 py-8 md:py-16 text-center bg-gray-100 text-gray-400">
      <div className="container mx-auto">
        <Image
          fixed={author.image.fixed}
          className="rounded-full border-4 border-white shadow-lg mb-2"
        />
        <h3 className="font-bold text-xl mb-4">{author.name}</h3>
        <p className="mb-8 lg:px-48">{author.shortBio.shortBio}</p>
        <div className="flex flex-row justify-center items-center">
          <IconLink icon={GitHubIcon} href={author.github} />
          <IconLink icon={LinkedInIcon} href={author.linkedIn} />
          <IconLink icon={TwitterIcon} href={author.twitter} />
          <IconLink icon={InstagramIcon} href={author.instagram} />
        </div>
      </div>
    </section>
  )
}
