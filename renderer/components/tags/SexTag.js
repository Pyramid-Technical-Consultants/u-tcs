import React from "react"
import TypeTag from "./TypeTag"

const map = {
  male: { icon: "user" },
  female: { icon: "user" },
  other: { icon: "user" },
  unknown: { icon: "issue", intent: "danger" },
}

// SexTag component to display patient sex information
function SexTag({ value, ...props }) {
  return <TypeTag value={value} prefix="patient.sex" map={map} {...props} />
}

export default SexTag