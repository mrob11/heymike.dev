import React from "react"
import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "normalize.css"

// TODO: Fetch this in getStaticProps when it's made available from _app.js
// See https://github.com/zeit/next.js/discussions/10949
const links = [
  { id: 1, url: "https://github.com/mike360", title: "GitHub" },
  { id: 2, url: "https://linkedin.com/in/mdrobinson", title: "LinkedIn" },
  { id: 3, url: "https://mike-robinson.ca", title: "Resume" },
]

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&family=Passion+One&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ec5453" />
        <meta name="msapplication-TileColor" content="#ec5453" />
        <meta name="theme-color" content="#ec5453" />
        <meta
          name="description"
          content="A blog about web and app development"
        />
      </Head>
      <div>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer links={links} />
        <style jsx>{`
          div {
            width: 100%;
            max-width: 42rem;
            padding: 2rem 1.5rem;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          main {
            flex: 1;
          }
        `}</style>
        <style jsx global>{`
          body {
            font-family: "Merriweather", serif;
            font-size: 16px;
            color: #232323;
          }
          a {
            color: #ec5453;
          }
        `}</style>
      </div>
    </>
  )
}
