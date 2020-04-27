import React from "react"

export default function Image({ alt, src }) {
  return <img src={`${src}?fm=webp&w=672`} alt={alt} />
}
