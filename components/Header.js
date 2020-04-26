import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Logo from "../components/Logo"

export default function Header() {
  const router = useRouter()
  return (
    <header>
      <Logo onClick={() => router.push("/")} />
      <style jsx>{`
        h1 {
          font-size: 2rem;
          letter-spacing: -0.1rem;
          text-transform: lowercase;
        }
        h1 a {
          text-decoration: none;
          color: #232323;
        }
      `}</style>
    </header>
  )
}
