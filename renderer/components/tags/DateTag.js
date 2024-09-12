import React from "react"
import OptionalTag from "./OptionalTag"

function DateTag({ ...props }) {
  return <OptionalTag icon="calendar" {...props} />
}

export default DateTag