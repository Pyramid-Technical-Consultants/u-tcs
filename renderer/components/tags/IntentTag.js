import React from "react"
import PropTypes from "prop-types"
import OptionalTag from "./OptionalTag"

// Define a constant object for intent types with their respective icons and values
const INTENT_TYPES = {
  CURATIVE: {
    icon: "heart",
    value: "Curative",
    intent: "success",
    tooltip: "Intent of this plan is to cure the patient.",
  },
  PALLIATIVE: {
    icon: "heart",
    value: "Palliative",
    intent: "success",
    tooltip: "Intent of this plan is to palliate the patient.",
  },
  PROPHYLACTIC: {
    icon: "heart",
    value: "Prophylactic",
    intent: "success",
    tooltip: "Intent of this plan is to prevent the patient from getting sick.",
  },
  VERIFICATION: {
    icon: "lab-test",
    value: "Verification",
    intent: "warning",
    tooltip: "Intent of this plan is to verify a patient plan using a phantom.",
  },
  MACHINE_QA: {
    icon: "lab-test",
    value: "Machine QA",
    intent: "warning",
    tooltip:
      "Intent of this plan is to quality assure the delivery machine, independently of a specific patient.",
  },
  RESEARCH: {
    icon: "lab-test",
    value: "Research",
    intent: "warning",
    tooltip: "Intent of this plan is a research project, not intended for patient treatment.",
  },
  SERVICE: {
    icon: "wrench",
    value: "Service",
    intent: "warning",
    tooltip: "Intent of this plan is a machine repair or maintenance operation.",
  },
  UNKNOWN: {
    icon: "issue",
    value: "Unknown",
    intent: "danger",
    tooltip: "Intent of this plan is unknown, probably a software error.",
  },
}

// IntentTag component to display intent type information
const IntentTag = ({ value, ...props }) => {
  // If no value is provided, don't render anything
  if (!value) return null

  return (
    <OptionalTag
      // Use the INTENT_TYPES object to get the icon and value, or fallback to default
      {...(INTENT_TYPES[value] ?? INTENT_TYPES.UNKNOWN)}
      // Pass any additional props to the OptionalTag component
      {...props}
    />
  )
}

// PropTypes for type checking
IntentTag.propTypes = {
  value: PropTypes.oneOf([...Object.keys(INTENT_TYPES), ""]),
}

export default IntentTag
