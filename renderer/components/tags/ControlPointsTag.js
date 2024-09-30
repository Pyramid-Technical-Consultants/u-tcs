import React from "react"
import OptionalTag from "./OptionalTag"

const formatter = new Intl.NumberFormat()

function ControlPointsTag({ value, ...props }) {
  return (
    <OptionalTag
      icon="layout-auto"
      value={value ? `${formatter.format(value)} Control Points` : null}
      {...props}
    />
  )
}

export default ControlPointsTag
