// Extracts string fields from a DICOM data set
function dicomExtractStringFields(dataSet, fields) {
  // Create an empty object to store the extracted fields
  const object = {}

  // Iterate over the fields and extract the string value
  for (const [key, tag] of Object.entries(fields)) {
    // Extract the string value from the data set
    const value = dataSet.string(tag)

    // If the value is not undefined, add it to the object
    if (value !== undefined) {
      // Add the value to the object
      object[key] = value
    }
  }

  // Return the object with the extracted fields
  return object
}

export default dicomExtractStringFields
