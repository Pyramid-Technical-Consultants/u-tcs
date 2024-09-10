/**
 * Normalizes the sex field to a standard format.
 * @param {string} sex - The original sex value.
 * @returns {string} Normalized sex value.
 */
function dicomFormatSex(sex) {
  const normalized = sex.toLowerCase().trim()
  if (normalized.startsWith("m")) return "Male"
  if (normalized.startsWith("f")) return "Female"
  if (normalized === "o") return "Other"
  return "Unknown"
}

export default dicomFormatSex
