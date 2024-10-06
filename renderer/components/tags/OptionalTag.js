import React from "react"
import { Tag } from "@blueprintjs/core"
import { Tooltip } from "@blueprintjs/core"
import styled from "styled-components"

const Text = styled.div`
  max-width: 28rem;
  text-wrap: wrap;
`

function TooltipContent({ tooltip }) {
  return <Text>{tooltip}</Text>
}

function TagElement({ value, ...props }) {
  return (
    <Tag minimal interactive round {...props}>
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
      <Tooltip key={key} content={<TooltipContent tooltip={tooltip} compact={true} />}>
        <TagElement key={key} value={value} {...props} />
      </Tooltip>
    )
  }

  return <TagElement key={key} value={value} {...props} />
}

export default OptionalTag
