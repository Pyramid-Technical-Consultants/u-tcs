import React from "react"
import OptionalTag from "./OptionalTag"
import useLanguage from "../../hooks/useLanguage"
import { format } from "date-fns"
import { enUS, enGB, it, fr } from "date-fns/locale"

const localeMap = {
  "en-US": enUS,
  "en-GB": enGB,
  it: it,
  fr: fr,
}

function DateTag({ value, tooltip, ...props }) {
  const [i18n, language] = useLanguage()

  let displayValue = value
  let displayTooltip = tooltip

  if (value && value instanceof Date) {
    displayValue = format(value, "PP", { locale: localeMap[language] })
    displayTooltip = format(value, "PPPPpppp", { locale: localeMap[language] })
  }

  return (
    <OptionalTag
      icon="calendar"
      value={displayValue}
      tooltip={displayTooltip}
      {...props}
    />
  )
}

export default DateTag
