import React from "react"
import TypeTag from "./TypeTag"

const map = {
  treatment: { icon: "prescription", intent: "success" },
  continuation: { icon: "prescription", intent: "success" },
  open_portfilm: { icon: "film", intent: "success" },
  trmt_portfilm: { icon: "film", intent: "success" },
  setup: { icon: "changes", intent: "none" },
  unknown: { icon: "issue", intent: "danger" },
}

// TreatmentDeliveryTypeTag component to display treatment delivery type information
const TreatmentDeliveryTypeTag = ({ value, ...props }) => {
  return <TypeTag value={value} prefix="plan.treatmentDeliveryType" map={map} {...props} />
}

export default TreatmentDeliveryTypeTag
