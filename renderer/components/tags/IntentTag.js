import React, { useMemo } from "react"
import OptionalTag from "./OptionalTag"
import useLanguage from "../../hooks/useLanguage"

// IntentTag component to display intent type information
const IntentTag = ({ value, ...props }) => {
  const [i18n, language] = useLanguage()

  // If no value is provided, don't render anything
  if (!value) return null

  const valueProps = useMemo(() => {
    const intents = {
      CURATIVE: {
        icon: "heart",
        intent: "success",
        value: i18n.t("plan.intent.curative.value"),
        tooltip: i18n.t("plan.intent.curative.tooltip"),
      },
      PALLIATIVE: {
        icon: "heart",
        intent: "success",
        value: i18n.t("plan.intent.palliative.value"),
        tooltip: i18n.t("plan.intent.palliative.tooltip"),
      },
      PROPHYLACTIC: {
        icon: "heart",
        intent: "success",
        value: i18n.t("plan.intent.prophylactic.value"),
        tooltip: i18n.t("plan.intent.prophylactic.tooltip"),
      },
      VERIFICATION: {
        icon: "lab-test",
        intent: "warning",
        value: i18n.t("plan.intent.verification.value"),
        tooltip: i18n.t("plan.intent.verification.tooltip"),
      },
      MACHINE_QA: {
        icon: "lab-test",
        intent: "warning",
        value: i18n.t("plan.intent.machine_qa.value"),
        tooltip: i18n.t("plan.intent.machine_qa.tooltip"),
      },
      RESEARCH: {
        icon: "lab-test",
        intent: "warning",
        value: i18n.t("plan.intent.research.value"),
        tooltip: i18n.t("plan.intent.research.tooltip"),
      },
      SERVICE: {
        icon: "wrench",
        intent: "warning",
        value: i18n.t("plan.intent.service.value"),
        tooltip: i18n.t("plan.intent.service.tooltip"),
      },
      UNKNOWN: {
        icon: "issue",
        intent: "danger",
        value: i18n.t("plan.intent.unknown.value"),
        tooltip: i18n.t("plan.intent.unknown.tooltip"),
      },
    }
    return intents[value] ?? intents.UNKNOWN
  }, [i18n, language, value])

  return (
    <OptionalTag
      // Use the intents object to get the icon and value, or fallback to default
      {...valueProps}
      // Pass any additional props to the OptionalTag component
      {...props}
    />
  )
}

export default IntentTag
