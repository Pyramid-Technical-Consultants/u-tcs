/**
 * Extracts specified fields from a DICOM data set.
 *
 * @param {Object} dataSet - The DICOM data set to extract fields from.
 * @param {Object} fields - An object mapping desired field names to their DICOM tags and optional processors.
 * @returns {Object} An object containing the extracted fields and their processed values.
 */
function dicomExtractFields(dataSet, fields) {
  // Validate inputs
  if (!dataSet || typeof dataSet !== "object") {
    console.error("Invalid dataSet provided")
    return {}
  }

  if (!fields || typeof fields !== "object") {
    console.error("Invalid fields object provided")
    return {}
  }

  // Extract and process fields
  return Object.entries(fields).reduce((acc, [key, { tag, processor }]) => {
    const value = dataSet.string(tag)

    // Add non-empty values to the result, applying processor if provided
    if (value != null) {
      acc[key] = processor ? processor(value.trim()) : value.trim()
    }

    return acc
  }, {})
}

export default dicomExtractFields
