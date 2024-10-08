import dicomExtractTags from "./dicomExtractTags.js"

/**
 * Extracts and processes items from a DICOM dataset sequence.
 * @param {Object} dataSet - The DICOM dataset containing the sequence.
 * @param {string} index - The index of the sequence in the dataset.
 * @param {Object} tags - The tags to extract from each item.
 * @param {Function} [processor] - Optional function to process each extracted item.
 * @returns {Array} An array of extracted and processed items.
 */
function dicomExtractSequence(dataSet, index, tags, processor) {
  // Validate input parameters
  if (!dataSet || typeof dataSet !== "object") {
    console.warn("Invalid DICOM dataset provided")
    return []
  }
  if (!index || typeof index !== "string") {
    console.warn("Invalid index provided to dicomExtractSequence")
    return []
  }
  if (!tags || typeof tags !== "object") {
    console.warn("Invalid tags object provided to dicomExtractSequence")
    return []
  }

  // Get the sequence from the dataset
  const sequence = dataSet.elements[index]

  // Validate the sequence
  if (!sequence || typeof sequence !== "object") {
    console.warn("Invalid sequence provided to dicomExtractSequence")
    return []
  }

  // Early return if sequence items are not valid
  const items = sequence.items
  if (!Array.isArray(items) || items.length === 0) {
    return []
  }

  // Use map and filter for a more functional approach
  return items
    .map((item) => {
      // Extract tags from the item's dataSet
      const extractedItem = dicomExtractTags(item.dataSet, tags)

      // Process the item if a processor function is provided
      if (extractedItem && typeof processor === "function") {
        try {
          processor(extractedItem, item.dataSet)
        } catch (error) {
          console.error("Error in processor function:", error)
        }
      }

      return extractedItem
    })
    .filter(Boolean) // Remove any null or undefined items
}

export default dicomExtractSequence
