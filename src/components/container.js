import React from "react"
import styleGuide from "./style-guide.module.css"

export default function Container({ children }) {
  return (
    <div className="container mx-auto py-8 px-8 md:px-32 lg:px-48">
      <main className={styleGuide.styleGuide}>{children}</main>
    </div>
  )
}
