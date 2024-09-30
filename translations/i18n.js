import { I18n } from "i18n-js"

const translations = {
  "en-US": require("./english-us").default,
  "en-GB": require("./english-gb").default,
  it: require("./italian").default,
  fr: require("./french").default,
}

const i18n = new I18n(translations)

i18n.defaultLocale = "en-US"
i18n.enableFallback = true

export default i18n
