/**
 * Formats a DICOM float array string into an array of floats.
 * @param {string} arrayString - The DICOM float array string.
 * @returns {Array} An array of floats.
 */
function dicomFormatFloatArray(arrayString) {
  if (!arrayString) return null

  const floatArray = arrayString.split("\\").map((value) => parseFloat(value))
  if (!floatArray) return null

  return floatArray
}

export default dicomFormatFloatArray
