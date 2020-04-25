import React from "react"
import Head from "next/head"
import Author from "../components/Author"
import PostList from "../components/PostList"

const posts = [
  {
    id: 1,
    slug: "not-so-cool",
    title: "Succulents listicle hot chicken small batch paleo",
    description:
      "Coloring book four loko tacos squid narwhal shaman gluten-free, waistcoat VHS live-edge heirloom single-origin coffee hoodie.",
    publishDate: "2020-04-25T20:31:55.448Z",
  },
  {
    id: 2,
    slug: "really-cool-post",
    title: "This is a post",
    description: "And it is so cool",
    publishDate: "2020-04-25T20:31:55.448Z",
  },
]
export default function Index() {
  return (
    <>
      <Head>
        <title>Hey Mike — A blog by Mike Robinson</title>
      </Head>
      <Author
        name="Mike Robinson"
        title="I build apps and stuff for the web."
        avatar="https://avatars2.githubusercontent.com/u/243422?s=460&v=4"
      />
      <PostList posts={posts} />
    </>
  )
}
