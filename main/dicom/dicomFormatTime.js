/**
 * Formats a DICOM time string to HH:MM:SS.
 * @param {string} timeString - The DICOM time string (HHMMSS.FFFFFF).
 * @returns {string} Formatted time string.
 */
function dicomFormatTime(timeString) {
  return timeString.replace(/(\d{2})(\d{2})(\d{2})\.?(\d*)/, "$1:$2:$3")
}

export default dicomFormatTime
