/**
 * Creates a JavaScript Date object from DICOM date and time strings.
 * @param {string} dateString - The formatted date string (YYYY-MM-DD).
 * @param {string} timeString - The formatted time string (HH:MM:SS).
 * @returns {Date} A JavaScript Date object representing the date and time.
 */
function dicomCreateDateTime(dateString, timeString = "00:00:00") {
  const [year, month, day] = dateString.split("-").map(Number)
  const [hours, minutes, seconds] = timeString.split(":").map(Number)
  return new Date(year, month - 1, day, hours, minutes, seconds)
}

export default dicomCreateDateTime
