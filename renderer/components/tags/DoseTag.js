import React from "react"
import OptionalTag from "./OptionalTag"

const formatter = new Intl.NumberFormat()

function DoseTag({ value, ...props }) {
  if (typeof value === "undefined" || value === null || value === 0) {
    return null
  }

  return (
    <OptionalTag
      icon="flash"
      value={
        <span>
          {formatter.format(value)} <b>Gy</b>
        </span>
      }
      {...props}
    />
  )
}

export default DoseTag
