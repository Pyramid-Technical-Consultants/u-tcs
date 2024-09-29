import React from "react"
import { Tag } from "@blueprintjs/core"
import { Tooltip } from "@blueprintjs/core"

function TagElement({ value, ...props }) {
  return (
    <Tag minimal interactive {...props}>
      {value}
    </Tag>
  )
}

function OptionalTag({ value, tooltip, ...props }) {
  if (typeof value === "undefined" || value === null) {
    return null
  }

  if (tooltip) {
    return (
      <Tooltip content={tooltip}>
        <TagElement value={value} {...props} />
      </Tooltip>
    )
  }

  return <TagElement value={value} {...props} />
}

export default OptionalTag
