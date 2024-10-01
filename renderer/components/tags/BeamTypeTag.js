import React from "react"
import TypeTag from "./TypeTag"

const map = {
  static: {
    icon: "arrow-right",
  },
  dynamic: {
    icon: "reset",
  },
  unknown: { icon: "issue", intent: "danger" },
}

// BeamTypeTag component to display beam type information
const BeamTypeTag = ({ value, ...props }) => {
  return <TypeTag value={value} prefix="plan.beamType" map={map} {...props} />
}

export default BeamTypeTag
