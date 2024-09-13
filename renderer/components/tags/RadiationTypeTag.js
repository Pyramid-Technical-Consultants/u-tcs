import React from "react"
import PropTypes from "prop-types"
import OptionalTag from "./OptionalTag"
import styled from "styled-components"

const Symbol = styled.b`
  margin-top: -3px;
`

// Define a constant object for radiation types with their respective icons and values
const RADIATION_TYPES = {
  PHOTON: { icon: <Symbol>γ</Symbol>, value: "Photon" },
  ELECTRON: { icon: <Symbol>e⁻</Symbol>, value: "Electron" },
  NEUTRON: { icon: <Symbol>n</Symbol>, value: "Neutron" },
  PROTON: { icon: <Symbol>p⁺</Symbol>, value: "Proton" },
  ION: { icon: "range-ring", value: "Ion" },
}

// RadiationTypeTag component to display radiation type information
const RadiationTypeTag = ({ value, ...props }) => {
  // If no value is provided, don't render anything
  if (!value) return null

  return (
    <OptionalTag
      // Use the RADIATION_TYPES object to get the icon and value, or fallback to default
      {...(RADIATION_TYPES[value] ?? { icon: "flash", value })}
      // Pass any additional props to the OptionalTag component
      {...props}
    />
  )
}

// PropTypes for type checking
RadiationTypeTag.propTypes = {
  value: PropTypes.oneOf([...Object.keys(RADIATION_TYPES), ""]),
}

export default RadiationTypeTag
