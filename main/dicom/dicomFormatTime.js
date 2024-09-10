/**
 * Formats a DICOM time string to HH:MM:SS.
 * @param {string} timeString - The DICOM time string (HHMMSS.FFFFFF).
 * @returns {string} Formatted time string.
 */
function dicomFormatTime(timeString) {
  // Check if the input is a valid string
  if (!timeString || typeof timeString !== "string") {
    return null
  }

  // Check if the timeString matches the expected format
  const match = timeString.match(/^(\d{2})(\d{2})(\d{2})(\.?\d*)$/)
  if (!match) {
    return null
  }

  // Extract hours, minutes, and seconds from the match
  const [, hours, minutes, seconds] = match

  // Validate hours, minutes, and seconds
  if (
    parseInt(hours, 10) > 23 ||
    parseInt(minutes, 10) > 59 ||
    parseInt(seconds, 10) > 59
  ) {
    return null
  }

  // Format the time string
  return `${hours}:${minutes}:${seconds}`
}

export default dicomFormatTime
