/**
 * Creates a JavaScript Date object from DICOM date and time strings.
 * @param {string} dateString - The formatted date string (YYYY-MM-DD).
 * @param {string} timeString - The formatted time string (HH:MM:SS).
 * @returns {Date} A JavaScript Date object representing the date and time.
 * @returns {null} If the input values are invalid.
 */
function dicomCreateDateTime(dateString, timeString = "00:00:00") {
  const [year, month, day] = dateString.split("-").map(Number)
  const [hours, minutes, seconds] = timeString.split(":").map(Number)

  // Check if the input values are valid
  if (
    isNaN(year) ||
    isNaN(month) ||
    isNaN(day) ||
    isNaN(hours) ||
    isNaN(minutes) ||
    isNaN(seconds)
  ) {
    return null
  }

  // Use Date.UTC() to create a date in UTC
  const utcDate = Date.UTC(year, month - 1, day, hours, minutes, seconds)

  // Check if the resulting date is valid
  if (isNaN(utcDate)) {
    return null
  }

  return new Date(utcDate)
}

export default dicomCreateDateTime
