import React from "react"
import { DateTime } from "luxon"

export default function PostDate({ date }) {
  return (
    <time dateTime={date}>
      {DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL)}
    </time>
  )
}
