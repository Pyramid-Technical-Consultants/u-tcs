/**
 * Formats a DICOM date string to YYYY-MM-DD.
 * @param {string} dateString - The DICOM date string (YYYYMMDD).
 * @returns {string} Formatted date string.
 */
function dicomFormatDate(dateString) {
  return dateString.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3")
}

export default dicomFormatDate
