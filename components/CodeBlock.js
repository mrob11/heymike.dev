import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark as theme } from "react-syntax-highlighter/dist/cjs/styles/prism"

export default function CodeBlock({ language, value }) {
  return (
    <SyntaxHighlighter language={language} style={theme}>
      {value}
    </SyntaxHighlighter>
  )
}
