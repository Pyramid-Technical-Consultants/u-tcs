import React from "react"
import TagList from "./TagList"
import DateTag from "./tags/DateTag"
import IntentTag from "./tags/IntentTag"

const PLAN_TAGS_RENDERERS = {
  intent: (props) => <IntentTag {...props} />,
  date: (props) => <DateTag {...props} />,
}

function PlanTags({ plan = {} }) {
  return <TagList tags={plan.general} renderers={PLAN_TAGS_RENDERERS} />
}

export default PlanTags
