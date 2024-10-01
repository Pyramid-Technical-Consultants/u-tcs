import React from "react"
import TypeTag from "./TypeTag"

const map = {
  none: { icon: "cross" },
  uniform: { icon: "symbol-square" },
  modulated: { icon: "layout-grid" },
  modulated_spec: { icon: "layout-grid" },
}

// ScanModeTag component to display scan mode information
const ScanModeTag = ({ value, ...props }) => {
  return <TypeTag value={value} prefix="plan.scanMode" map={map} {...props} />
}

export default ScanModeTag
