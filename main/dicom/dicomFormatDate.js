/**
 * Formats a DICOM date string to YYYY-MM-DD.
 * @param {string} dateString - The DICOM date string (YYYYMMDD).
 * @returns {string} Formatted date string.
 */
function dicomFormatDate(dateString) {
  // Check if the input is a valid string
  if (!dateString || typeof dateString !== "string") {
    return null
  }

  // Extract the year, month, and day from the date string
  const match = dateString.match(/^(\d{4})(\d{2})(\d{2})$/)
  if (!match) {
    return null
  }

  // Extract the year, month, and day from the match
  const [, year, month, day] = match

  // Check if the date is valid
  const date = new Date(year, month - 1, day)
  if (
    isNaN(date.getTime()) ||
    date.getFullYear() !== parseInt(year, 10) ||
    date.getMonth() !== parseInt(month, 10) - 1 ||
    date.getDate() !== parseInt(day, 10)
  ) {
    return null
  }

  // Return the formatted date string
  return `${year}-${month}-${day}`
}

export default dicomFormatDate
