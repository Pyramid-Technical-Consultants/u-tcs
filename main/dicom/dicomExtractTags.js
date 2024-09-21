import dicomExtractSequence from "./dicomExtractSequence"

/**
 * Extracts specified tags from a DICOM data set.
 *
 * @param {Object} dataSet - The DICOM data set to extract tags from.
 * @param {Object} tags - An object mapping desired field names to their DICOM tags and optional processors.
 * @returns {Object} An object containing the extracted tags and their processed values.
 */
function dicomExtractTags(dataSet, tags) {
  // Validate inputs
  if (!dataSet || typeof dataSet !== "object") {
    console.error("Invalid dataSet provided")
    return {}
  }

  if (!tags || typeof tags !== "object") {
    console.error("Invalid tags object provided")
    return {}
  }

  // Extract and process tags
  return Object.entries(tags).reduce(
    (acc, [key, { tag, processor, sequence }]) => {
      if (sequence) {
        // Extract the sequence
        const items = dicomExtractSequence(dataSet, tag, sequence, processor)

        // Add non-empty values to the result
        if (items != null) {
          acc[key] = items
        }
      } else {
        // Extract the value
        const value = dataSet.string(tag)

        // Add non-empty values to the result, applying processor if provided
        if (value != null) {
          acc[key] = processor ? processor(value.trim()) : value.trim()
        }
      }

      return acc
    },
    {}
  )
}

export default dicomExtractTags
