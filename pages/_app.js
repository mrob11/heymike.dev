import React from "react"
import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "normalize.css"

const links = [
  { id: 1, url: "https://github.com/mike360", title: "GitHub" },
  { id: 2, url: "https://linkedin.com/in/mdrobinson", title: "LinkedIn" },
]

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&family=Passion+One&display=swap"
          rel="stylesheet"
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
