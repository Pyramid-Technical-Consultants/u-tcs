import React from "react"
import OptionalTag from "./OptionalTag"

function DoseTag({ dose, units, ...props }) {
  if (!dose) return null

  const formattedDose = new Intl.NumberFormat().format(dose)
  const value = (
    <span>
      {formattedDose} <b>{units}</b>
    </span>
  )

  return <OptionalTag icon="prescription" {...props} value={value} />
}

export default DoseTag
