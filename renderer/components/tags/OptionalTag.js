import React from "react"
import { Tag } from "@blueprintjs/core"

function OptionalTag({ value, ...props }) {
  if (typeof value === "undefined" || value === null) {
    return null
  }

  return <Tag minimal {...props}>{value}</Tag>
}

export default OptionalTag
