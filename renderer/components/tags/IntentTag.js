import React from "react"
import PropTypes from "prop-types"
import OptionalTag from "./OptionalTag"

// Define a constant object for intent types with their respective icons and values
const INTENT_TYPES = {
  CURATIVE: { icon: "heart", value: "Curative", intent: "success" },
  PALLIATIVE: { icon: "heart", value: "Palliative", intent: "success" },
  PROPHYLACTIC: { icon: "heart", value: "Prophylactic", intent: "success" },
  VERIFICATION: { icon: "lab-test", value: "Verification", intent: "warning" },
  MACHINE_QA: { icon: "lab-test", value: "Machine QA", intent: "warning" },
  RESEARCH: { icon: "lab-test", value: "Research", intent: "warning" },
  SERVICE: { icon: "wrench", value: "Service", intent: "warning" },
}

// IntentTag component to display intent type information
const IntentTag = ({ value, ...props }) => {
  // If no value is provided, don't render anything
  if (!value) return null

  return (
    <OptionalTag
      // Use the INTENT_TYPES object to get the icon and value, or fallback to default
      {...(INTENT_TYPES[value] ?? { icon: "issue", value, intent: "danger" })}
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
