import React from "react"
import TypeTag from "./TypeTag"

const map = {
  curative: {
    icon: "heart",
    intent: "success",
  },
  palliative: {
    icon: "heart",
    intent: "success",
  },
  prophylactic: {
    icon: "heart",
    intent: "success",
  },
  verification: {
    icon: "lab-test",
    intent: "warning",
  },
  machine_qa: {
    icon: "lab-test",
    intent: "warning",
  },
  research: {
    icon: "lab-test",
    intent: "warning",
  },
  service: {
    icon: "wrench",
    intent: "warning",
  },
  unknown: {
    icon: "issue",
    intent: "danger",
  },
}


// IntentTag component to display intent type information
const IntentTag = ({ value, ...props }) => {
  return <TypeTag value={value} prefix="plan.intent" map={map} {...props} />
}

export default IntentTag
