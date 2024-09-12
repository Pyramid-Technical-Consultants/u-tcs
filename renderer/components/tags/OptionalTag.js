import React from "react"
import { Tag } from "@blueprintjs/core"

function OptionalTag({ value, ...props }) {
  if (!value) {
    return null
  }

  return <Tag minimal {...props}>{value}</Tag>
}

export default OptionalTag
