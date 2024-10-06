import React from "react"
import TagList from "./TagList"
import DateTag from "./tags/DateTag"
import IntentTag from "./tags/IntentTag"

const PLAN_TAGS_RENDERERS = {
  intent: ({ key, ...props }) => <IntentTag key={key} {...props} />,
  dateTime: ({ key, ...props }) => <DateTag key={key} {...props} />,
}

function PlanTags({ plan = {} }) {
  return <TagList tags={plan.generalPlan} renderers={PLAN_TAGS_RENDERERS} />
}

export default PlanTags
