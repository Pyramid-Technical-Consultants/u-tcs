import fs from "fs"
import dicomParser from "dicom-parser"

function dicomLoadLocalFile(filePath) {
  try {
    // Read the DICOM file
    const fileBuffer = fs.readFileSync(filePath)

    // Convert the Buffer to Uint8Array
    const byteArray = new Uint8Array(fileBuffer)

    try {
      // Parse the byte array to get a DataSet object that has the parsed contents
      // Allow raw files
      return dicomParser.parseDicom(byteArray, {
        TransferSyntaxUID: "1.2.840.10008.1.2",
      })
    } catch (error) {
      console.error("Error parsing DICOM file", error)
    }
  } catch (error) {
    console.error("Error reading DICOM file", error)
  }

  return null
}

export default dicomLoadLocalFile
