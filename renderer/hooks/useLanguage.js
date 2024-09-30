import { useEffect, useState } from "react"
import i18n from "../../translations/i18n"

const useLanguage = () => {
  const [language, setLanguage] = useState(i18n.locale)

  useEffect(() => {
    return window.ipc.on("language-change", (language) => {
      i18n.locale = language
      setLanguage(language)
    })
  }, [])

  return [i18n, language]
}

export default useLanguage
