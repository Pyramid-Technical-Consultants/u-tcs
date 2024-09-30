import React from "react"
import { Tag } from "@blueprintjs/core"
import { Tooltip } from "@blueprintjs/core"

function TagElement({ key, value, ...props }) {
  return (
    <Tag key={key} minimal interactive {...props}>
      {value}
    </Tag>
  )
}

function OptionalTag({ key, value, tooltip, ...props }) {
  if (typeof value === "undefined" || value === null) {
    return null
  }

  if (tooltip) {
    return (
      <Tooltip key={key} content={tooltip}>
        <TagElement key={key} value={value} {...props} />
      </Tooltip>
    )
  }

  return <TagElement key={key} value={value} {...props} />
}

export default OptionalTag
