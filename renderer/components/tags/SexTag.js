import React from "react"
import OptionalTag from "./OptionalTag"

function SexTag({ ...props }) {
  return <OptionalTag icon="user" {...props} />
}

export default SexTag