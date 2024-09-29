import React from "react"
import OptionalTag from "./OptionalTag"

function formatDate(date) {
  return date.toLocaleDateString()
}

function DateTag({ value, ...props }) {
  console.log(value)

  if (value instanceof Date) {
    value = formatDate(value)
  }

  return <OptionalTag icon="calendar" value={value} {...props} />
}

export default DateTag
