import readDirectory from "../files/readDirectory"
import dicomLoadLocalFile from "./dicomLoadLocalFile"
import dicomExtractPatient from "./dicomExtractPatient"
import extractFileMetadata from "./dicomExtractMetadata"

/**
 * Loads DICOM files from a local directory and extracts patient information.
 * @param {string} directory - Path to the directory containing DICOM files.
 * @returns {Promise<Object>} A promise that resolves to an object of patients, keyed by patient ID.
 */
function dicomLoadLocalDirectory(directory) {
  // Validate input
  if (!directory || typeof directory !== "string") {
    console.error("Invalid directory path provided")
    return Promise.resolve({})
  }

  // Read all .dcm files from the specified directory
  return readDirectory(directory, ".dcm")
    .then((dicomFiles) => {
      // Check if any DICOM files were found
      if (!dicomFiles.length) {
        console.warn("No DICOM files found in the specified directory")
        return {}
      }

      const patients = {} // Object to store patient data
      const errors = [] // Array to collect any errors during processing

      // Process each DICOM file
      return Promise.all(
        dicomFiles.map((filePath) =>
          dicomLoadLocalFile(filePath)
            .then((dataSet) => {
              // Ensure the file was loaded successfully
              if (!dataSet) {
                throw new Error(`Failed to load DICOM file: ${filePath}`)
              }

              let file = {}

              // Extract patient information from the DICOM dataset
              const patient = dicomExtractPatient(dataSet, file)
              if (!patient.id) {
                throw new Error(`Patient ID missing in file: ${filePath}`)
              }

              // Extract file metadata from the DICOM dataset
              extractFileMetadata(dataSet, file, filePath)

              // Add or update patient information
              if (patients[patient.id]) {
                // If patient already exists, add the file info to their list
                patients[patient.id].files.push(file)
              } else {
                // If new patient, create a new entry with patient info and file info
                patients[patient.id] = { patient, files: [file] }
              }
            })
            .catch((error) => {
              // Collect any errors encountered during file processing
              errors.push({ filePath, error: error.message })
            })
        )
      ).then(() => {
        // Log any errors encountered during processing
        if (errors.length > 0) {
          console.error(
            "Errors encountered while processing DICOM files:",
            errors
          )
        }
        return patients // Return the collected patient data
      })
    })
    .catch((error) => {
      // Handle any errors that occurred during directory reading
      console.error("Error processing DICOM directory:", error.message)
      return {}
    })
}

export default dicomLoadLocalDirectory
