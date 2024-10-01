import React from "react"
import TypeTag from "./TypeTag"
import styled from "styled-components"

const Symbol = styled.b`
  margin-top: -3px;
`

const map = {
  photon: {
    icon: <Symbol>γ</Symbol>,
  },
  electron: {
    icon: <Symbol>e⁻</Symbol>,
  },
  neutron: {
    icon: <Symbol>n</Symbol>,
  },
  proton: {
    icon: <Symbol>p⁺</Symbol>,
  },
  ion: {
    icon: "range-ring",
  },
  unknown: {
    icon: "issue",
    intent: "danger",
  },
}

// RadiationTypeTag component to display radiation type information
const RadiationTypeTag = ({ value, ...props }) => {
  return <TypeTag value={value} prefix="plan.radiationType" map={map} {...props} />
}

export default RadiationTypeTag
