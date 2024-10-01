import React from "react"
import TypeTag from "./TypeTag"

const map = {
  hfp: { icon: "compass" },
  hfs: { icon: "compass" },
  hfdr: { icon: "compass" },
  hfdl: { icon: "compass" },
  ffdr: { icon: "compass" },
  ffdl: { icon: "compass" },
  ffp: { icon: "compass" },
  ffs: { icon: "compass" },
  lfp: { icon: "compass" },
  lfs: { icon: "compass" },
  rfp: { icon: "compass" },
  rfs: { icon: "compass" },
  afdr: { icon: "compass" },
  afdl: { icon: "compass" },
  pfdr: { icon: "compass" },
  pfdl: { icon: "compass" },
  sitting: { icon: "compass" },
  unknown: { icon: "issue", intent: "danger" },
}

// PatientPositionTag component to display patient position information
const PatientPositionTag = ({ value, ...props }) => {
  return <TypeTag value={value} prefix="plan.patientPositionType" map={map} {...props} />
}

export default PatientPositionTag
