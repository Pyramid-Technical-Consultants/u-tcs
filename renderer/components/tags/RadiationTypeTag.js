import React, { useMemo } from "react"
import OptionalTag from "./OptionalTag"
import useLanguage from "../../hooks/useLanguage"
import styled from "styled-components"

const Symbol = styled.b`
  margin-top: -3px;
`

// RadiationTypeTag component to display radiation type information
const RadiationTypeTag = ({ value, ...props }) => {
  const [i18n, language] = useLanguage()

  // If no value is provided, don't render anything
  if (!value) return null

  const valueProps = useMemo(() => {
    const intents = {
      PHOTON: {
        icon: <Symbol>γ</Symbol>,
        value: i18n.t("plan.radiationType.photon.value"),
        tooltip: i18n.t("plan.radiationType.photon.tooltip"),
      },
      ELECTRON: {
        icon: <Symbol>e⁻</Symbol>,
        value: i18n.t("plan.radiationType.electron.value"),
        tooltip: i18n.t("plan.radiationType.electron.tooltip"),
      },
      NEUTRON: {
        icon: <Symbol>n</Symbol>,
        value: i18n.t("plan.radiationType.neutron.value"),
        tooltip: i18n.t("plan.radiationType.neutron.tooltip"),
      },
      PROTON: {
        icon: <Symbol>p⁺</Symbol>,
        value: i18n.t("plan.radiationType.proton.value"),
        tooltip: i18n.t("plan.radiationType.proton.tooltip"),
      },
      ION: {
        icon: "range-ring",
        value: i18n.t("plan.radiationType.ion.value"),
        tooltip: i18n.t("plan.radiationType.ion.tooltip"),
      },
      UNKNOWN: {
        icon: "issue",
        intent: "danger",
        value: i18n.t("plan.radiationType.unknown.value"),
        tooltip: i18n.t("plan.radiationType.unknown.tooltip"),
      },
    }
    return intents[value] ?? intents.UNKNOWN
  }, [i18n, language, value])


  return (
    <OptionalTag {...valueProps} {...props} />
  )
}


export default RadiationTypeTag
