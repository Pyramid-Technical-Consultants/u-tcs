import React from "react"
import PropTypes from "prop-types"
import OptionalTag from "./OptionalTag"

// Define a constant object for radiation types with their respective icons and values
const BEAM_TYPES = {
  STATIC: { icon: "arrow-right", value: "Static" },
  DYNAMIC: { icon: "reset", value: "Dynamic" },
}

// RadiationTypeTag component to display radiation type information
const RadiationTypeTag = ({ value, ...props }) => {
  // If no value is provided, don't render anything
  if (!value) return null

  return (
    <OptionalTag
      // Use the BEAM_TYPES object to get the icon and value, or fallback to default
      {...(BEAM_TYPES[value] ?? { icon: "arrow-right", value })}
      // Pass any additional props to the OptionalTag component
      {...props}
    />
  )
}

// PropTypes for type checking
RadiationTypeTag.propTypes = {
  value: PropTypes.oneOf([...Object.keys(BEAM_TYPES), ""]),
}

export default RadiationTypeTag
