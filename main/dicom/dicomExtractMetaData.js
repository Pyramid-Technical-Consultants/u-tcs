import path from "path"
import dicomExtractTags from "./dicomExtractTags"
import dicomFormatDate from "./dicomFormatDate"
import dicomFormatTime from "./dicomFormatTime"
import dicomCreateDateTime from "./dicomCreateDateTime"

// DICOM tags for metadata
const META_DATA_TAGS = {
  type: { tag: "x00080016" }, // SOP Class UID
  modality: { tag: "x00080060" }, // Modality
  studyDate: { tag: "x00080020", processor: dicomFormatDate }, // Study Date
  studyTime: { tag: "x00080030", processor: dicomFormatTime }, // Study Time
  seriesNumber: { tag: "x00200011", processor: parseInt }, // Series Number
  instanceNumber: { tag: "x00200013", processor: parseInt }, // Instance Number
  id: { tag: "x00080018" }, // SOP Instance UID
}

/**
 * Extracts metadata from a DICOM file.
 * @param {Object} dataSet - The DICOM data set.
 * @param {Object} file - The file object to store the extracted metadata in.
 * @param {string} filePath - The path to the DICOM file.
 * @returns {Object} - The metadata extracted from the DICOM file.
 */
function extractFileMetadata(dataSet, file, filePath) {
  // Validate input dataSet
  if (!dataSet || typeof dataSet !== "object") {
    throw new Error("Invalid dataSet provided")
  }

  // Extract metadata tags from the DICOM dataset
  file.metaData = dicomExtractTags(dataSet, META_DATA_TAGS)

  // Create a combined studyDateTime if studyDate is available
  if (file.metaData.studyDate) {
    file.metaData.studyDateTime = dicomCreateDateTime(
      file.metaData.studyDate,
      file.metaData.studyTime
    )
  }

  if (filePath) {
    // Add file path and name to the metadata
    file.metaData.filePath = filePath
    file.metaData.fileName = path.basename(filePath)
  }

  // Return the extracted metadata along with the file path
  return file.metaData
}

export default extractFileMetadata
