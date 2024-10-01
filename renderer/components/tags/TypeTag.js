import React, { useMemo } from "react"
import OptionalTag from "./OptionalTag"
import useLanguage from "../../hooks/useLanguage"

// TypeTag component to display a DICOM type tag.
const TypeTag = ({ value, prefix, map, ...props }) => {
  const [i18n, language] = useLanguage()

  // Get the type props for the given value and map.
  // If the value is not found in the map, use the unknown type.
  // Translate the value and tooltip using the provided prefix and language.
  const typeProps = useMemo(() => {
    if (!value) return null
    
    const lowerCaseValue = value.toLowerCase()
    return {
      ...(map[lowerCaseValue] ??
        map.unknown ?? {
          icon: "issue",
          intent: "danger",
        }),
      value: i18n.t(`${prefix}.${lowerCaseValue}.value`),
      tooltip: i18n.t(`${prefix}.${lowerCaseValue}.tooltip`),
    }
  }, [i18n, language, value, map, prefix])

  // If no value is provided, don't render anything.
  if (!value) return null

  // Render the OptionalTag with the type props and any additional props.
  return <OptionalTag {...typeProps} {...props} />
}

export default TypeTag
