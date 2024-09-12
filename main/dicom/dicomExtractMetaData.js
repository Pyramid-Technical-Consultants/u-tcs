import path from "path"
import dicomExtractFields from "./dicomExtractFields"
import dicomFormatDate from "./dicomFormatDate"
import dicomFormatTime from "./dicomFormatTime"
import dicomCreateDateTime from "./dicomCreateDateTime"

// DICOM tags for metadata
const META_DATA_FIELDS = {
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
  const metaData = dicomExtractFields(dataSet, META_DATA_FIELDS)

  // Create a combined studyDateTime if studyDate is available
  if (metaData.studyDate) {
    metaData.studyDateTime = dicomCreateDateTime(
      metaData.studyDate,
      metaData.studyTime
    )
  }

  // Return the extracted metadata along with the file path
  return {
    filePath: filePath,
    fileName: path.basename(filePath),
    ...metaData,
  }
}

export default extractFileMetadata
