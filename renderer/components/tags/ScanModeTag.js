import React from "react"
import PropTypes from "prop-types"
import OptionalTag from "./OptionalTag"

// Define a constant object for radiation types with their respective icons and values
const SCAN_MODES = {
  NONE: { icon: "cross", value: "No Scan" },
  UNIFORM: { icon: "symbol-square", value: "Uniform Scan" },
  MODULATED: { icon: "layout-grid", value: "Modulated Scan" },
  MODULATED_SPEC: { icon: "layout-grid", value: "Modulated Scan" },
}

// ScanModeTag component to display radiation type information
const ScanModeTag = ({ value, ...props }) => {
  // If no value is provided, don't render anything
  if (!value) return null

  return (
    <OptionalTag
      // Use the SCAN_MODES object to get the icon and value, or fallback to default
      {...(SCAN_MODES[value] ?? { icon: "arrow-right", value })}
      // Pass any additional props to the OptionalTag component
      {...props}
    />
  )
}

// PropTypes for type checking
ScanModeTag.propTypes = {
  value: PropTypes.oneOf([...Object.keys(SCAN_MODES), ""]),
}

export default ScanModeTag
