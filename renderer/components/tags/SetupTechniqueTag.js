import React from "react"
import PropTypes from "prop-types"
import OptionalTag from "./OptionalTag"

// Define a constant object for setup technique types with their respective icons and values
const SETUP_TECHNIQUE_TYPES = {
  ISOCENTRIC: { icon: "bullseye", value: "Isocentric" },
  FIXED_SSD: { icon: "bullseye", value: "Fixed SSD" },
  TBI: { icon: "bullseye", value: "TBI" },
  BREAST_BRIDGE: { icon: "bullseye", value: "Breast Bridge" },
  SKIN_APPOSITION: { icon: "bullseye", value: "Skin Apposition" },
}

// SetupTechniqueTag component to display setup technique information
const SetupTechniqueTag = ({ value, ...props }) => {
  // If no value is provided, don't render anything
  if (!value) return null

  return (
    <OptionalTag
      // Use the SETUP_TECHNIQUE_TYPES object to get the icon and value, or fallback to default
      {...(SETUP_TECHNIQUE_TYPES[value] ?? { icon: "bullseye", value })}
      // Pass any additional props to the OptionalTag component
      {...props}
    />
  )
}

// PropTypes for type checking
SetupTechniqueTag.propTypes = {
  value: PropTypes.oneOf([...Object.keys(SETUP_TECHNIQUE_TYPES), ""]),
}

export default SetupTechniqueTag
