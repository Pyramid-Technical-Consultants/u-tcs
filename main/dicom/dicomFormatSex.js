/**
 * Normalizes the sex field to a standard format.
 * @param {string} sex - The original sex value.
 * @returns {string} Normalized sex value.
 */
function dicomFormatSex(sex) {
  const normalized = sex.toLowerCase().trim()
  if (normalized.startsWith("m")) return "male"
  if (normalized.startsWith("f")) return "female"
  if (normalized === "o") return "other"
  return "unknown"
}

export default dicomFormatSex
