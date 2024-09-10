import fs from "fs/promises"
import dicomParser from "dicom-parser"

/**
 * Asynchronously loads and parses a DICOM file from the local filesystem.
 * 
 * @param {string} filePath - The path to the DICOM file to be loaded.
 * @returns {Promise<Object|null>} A Promise that resolves to:
 *   - An Object representing the parsed DICOM dataset if successful.
 *   - null if an error occurs during file reading or parsing.
 */
async function dicomLoadLocalFile(filePath) {
  try {
    // Read the DICOM file asynchronously
    const fileBuffer = await fs.readFile(filePath)

    // Convert the Buffer to Uint8Array
    const byteArray = new Uint8Array(fileBuffer)

    // Parse the byte array to get a DataSet object that has the parsed contents
    // Allow raw files
    const dataset = dicomParser.parseDicom(byteArray, {
      TransferSyntaxUID: "1.2.840.10008.1.2",
    })

    return dataset
  } catch (error) {
    console.error("Error processing DICOM file:", error.message)
    return null
  }
}

export default dicomLoadLocalFile
