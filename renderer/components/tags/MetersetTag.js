import React from "react"
import OptionalTag from "./OptionalTag"

const formatter = new Intl.NumberFormat()

function MetersetTag({ value, units, ...props }) {
  if (typeof value === "undefined" || value === null || value === 0) {
    return null
  }

  return (
    <OptionalTag
      icon="prescription"
      {...props}
      value={
        <span>
          {formatter.format(value)} <b>{units}</b>
        </span>
      }
    />
  )
}

export default MetersetTag
