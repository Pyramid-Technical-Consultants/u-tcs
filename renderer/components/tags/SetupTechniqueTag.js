import React from "react"
import TypeTag from "./TypeTag"

const map = {
  isocentric: { icon: "bullseye" },
  fixed_ssd: { icon: "bullseye" },
  tbi: { icon: "bullseye" },
  breast_bridge: { icon: "bullseye" },
  skin_apposition: { icon: "bullseye" },
  unknown: { icon: "issue", intent: "danger" },
}

// SetupTechniqueTag component to display setup technique information
const SetupTechniqueTag = ({ value, ...props }) => {
  return (
    <TypeTag value={value} prefix="plan.setupTechnique" map={map} {...props} />
  )
}

export default SetupTechniqueTag
