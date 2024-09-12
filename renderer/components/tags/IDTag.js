import React from "react"
import OptionalTag from "./OptionalTag"

function IDTag({ ...props }) {
  return <OptionalTag icon="id-number" {...props} />
}

export default IDTag