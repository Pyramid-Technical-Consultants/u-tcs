import React from "react"
import PropTypes from "prop-types"
import OptionalTag from "./OptionalTag"

// Define a constant object for position types with their respective icons and values
const POSITION_TYPES = {
  HFP: { icon: "compass", value: "Head First-Prone" },
  HFS: { icon: "compass", value: "Head First-Supine" },
  HFDR: { icon: "compass", value: "Head First-Decubitus Right" },
  HFDL: { icon: "compass", value: "Head First-Decubitus Left" },
  FFDR: { icon: "compass", value: "Feet First-Decubitus Right" },
  FFDL: { icon: "compass", value: "Feet First-Decubitus Left" },
  FFP: { icon: "compass", value: "Feet First-Prone" },
  FFS: { icon: "compass", value: "Feet First-Supine" },
  LFP: { icon: "compass", value: "Left First-Prone" },
  LFS: { icon: "compass", value: "Left First-Supine" },
  RFP: { icon: "compass", value: "Right First-Prone" },
  RFS: { icon: "compass", value: "Right First-Supine" },
  AFDR: { icon: "compass", value: "Anterior First-Decubitus Right" },
  AFDL: { icon: "compass", value: "Anterior First-Decubitus Left" },
  PFDR: { icon: "compass", value: "Posterior First-Decubitus Right" },
  PFDL: { icon: "compass", value: "Posterior First-Decubitus Left" },
  SITTING: { icon: "compass", value: "Seated" },
}

// PositionTag component to display position information
const PositionTag = ({ value, ...props }) => {
  // If no value is provided, don't render anything
  if (!value) return null

  return (
    <OptionalTag
      // Use the POSITION_TYPES object to get the icon and value, or fallback to default
      {...(POSITION_TYPES[value] ?? { icon: "compass", value })}
      // Pass any additional props to the OptionalTag component
      {...props}
    />
  )
}

// PropTypes for type checking
PositionTag.propTypes = {
  value: PropTypes.oneOf([...Object.keys(POSITION_TYPES), ""]),
}

export default PositionTag
