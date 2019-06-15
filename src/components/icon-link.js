import React from "react"

export default function IconLink({ icon: Icon, href }) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      <Icon className="w-8 h-8 mx-2 fill-current text-gray-400" />
    </a>
  )
}
