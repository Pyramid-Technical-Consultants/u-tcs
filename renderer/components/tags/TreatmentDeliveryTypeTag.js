import React from "react"
import OptionalTag from "./OptionalTag"

// Combined mapping of treatment delivery types to their corresponding icons and labels
const TREATMENT_DELIVERY_TYPES = {
  TREATMENT: { icon: "prescription", value: "Treatment" },
  CONTINUATION: { icon: "prescription", value: "Continuation" },
  OPEN_PORTFILM: { icon: "film", value: "Open Portfilm" },
  TRMT_PORTFILM: { icon: "film", value: "Treatment Portfilm" },
  SETUP: { icon: "changes", value: "Setup" },
}

/**
 * TreatmentDeliveryTypeTag component
 * Renders a tag with an icon and label based on the treatment delivery type
 * @param {string} value - The treatment delivery type
 * @param {Object} props - Additional props to pass to OptionalTag
 * @returns {React.Element|null} The rendered tag or null if no value is provided
 */
const TreatmentDeliveryTypeTag = ({ value, ...props }) => {
  if (!value) return null

  return (
    <OptionalTag
      {...(TREATMENT_DELIVERY_TYPES[value] ?? {
        icon: "prescription",
        value,
      })}
      {...props}
    />
  )
}

export default TreatmentDeliveryTypeTag
