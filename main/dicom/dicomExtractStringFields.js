/**
 * Extracts specified string fields from a DICOM data set.
 *
 * @param {Object} dataSet - The DICOM data set to extract fields from.
 * @param {Object} fields - An object mapping desired field names to their DICOM tags.
 * @returns {Object} An object containing the extracted fields and their values.
 */
function dicomExtractStringFields(dataSet, fields) {
  // Validate the dataSet input
  if (!dataSet || typeof dataSet !== "object") {
    console.error("Invalid dataSet provided")
    return {}
  }

  // Validate the fields input
  if (!fields || typeof fields !== "object") {
    console.error("Invalid fields object provided")
    return {}
  }

  // Use reduce to build the result object
  return Object.entries(fields).reduce((acc, [key, tag]) => {
    // Extract the string value from the data set
    const value = dataSet.string(tag)

    // If the value is not empty, add it to the accumulator
    if (value !== undefined && value !== null && value !== "") {
      acc[key] = value.trim()
    }

    // Return the updated accumulator
    return acc
  }, {})
}

export default dicomExtractStringFields
