import path from "path"
import extractStringFields from "./dicomExtractStringFields"
import dicomFormatDate from "./dicomFormatDate"
import dicomFormatTime from "./dicomFormatTime"
import dicomCreateDateTime from "./dicomCreateDateTime"

// DICOM tags for metadata
const META_DATA_FIELDS = {
  type: "x00080016", // SOP Class UID
  modality: "x00080060", // Modality
  studyDate: "x00080020", // Study Date
  studyTime: "x00080030", // Study Time
  seriesNumber: "x00200011", // Series Number
  instanceNumber: "x00200013", // Instance Number
}

/**
 * Extracts metadata from a DICOM file.
 * @param {Object} dataSet - The DICOM data set.
 * @param {string} filePath - The path to the DICOM file.
 * @returns {Object} - The metadata extracted from the DICOM file.
 */
function extractFileMetadata(dataSet, filePath) {
  // Validate input dataSet
  if (!dataSet || typeof dataSet !== "object") {
    throw new Error("Invalid dataSet provided")
  }

  // Validate input filePath
  if (!filePath || typeof filePath !== "string") {
    throw new Error("Invalid filePath provided")
  }

  // Extract metadata fields from the DICOM dataset
  const metaData = extractStringFields(dataSet, META_DATA_FIELDS)

  // Format study date if present
  if (metaData.studyDate) {
    metaData.studyDate = dicomFormatDate(metaData.studyDate)
  }

  // Format study time if present
  if (metaData.studyTime) {
    metaData.studyTime = dicomFormatTime(metaData.studyTime)
  }

  // Create a combined studyDateTime if studyDate is available
  if (metaData.studyDate) {
    metaData.studyDateTime = dicomCreateDateTime(
      metaData.studyDate,
      metaData.studyTime
    )
  }

  // Convert seriesNumber to integer if present
  if (metaData.seriesNumber) {
    metaData.seriesNumber = parseInt(metaData.seriesNumber, 10)
  }

  // Convert instanceNumber to integer if present
  if (metaData.instanceNumber) {
    metaData.instanceNumber = parseInt(metaData.instanceNumber, 10)
  }

  // Return the extracted metadata along with the file path
  return {
    path: filePath,
    fileName: path.basename(filePath),
    ...metaData,
  }
}

export default extractFileMetadata
