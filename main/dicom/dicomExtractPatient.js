import dicomExtractStringFields from "./dicomExtractStringFields"
import dicomFormatDate from "./dicomFormatDate"
import dicomFormatTime from "./dicomFormatTime"
import dicomCreateDateTime from "./dicomCreateDateTime"
import dicomFormatSex from "./dicomFormatSex"

// DICOM tags for patient information
const PATIENT_FIELDS = {
  name: "x00100010", // Patient's Name
  nameOther: "x00101001", // Other Patient Names
  id: "x00100020", // Patient ID
  birthDate: "x00100030", // Patient's Birth Date
  birthTime: "x00100032", // Patient's Birth Time
  sex: "x00100040", // Patient's Sex
  qualityControlSubject: "x00100200", // Quality Control Subject
  speciesDescription: "x00102201", // Patient Species Description
  breedDescription: "x00102292", // Patient Breed Description
  responsiblePersonName: "x00102297", // Responsible Person's Name
  responsiblePersonRole: "x00102298", // Responsible Person's Role
  responsibleOrganization: "x00102299", // Responsible Organization
  comments: "x00104000", // Patient Comments
  identityRemoved: "x00120062", // Patient Identity Removed
}

/**
 * Extracts patient data from a DICOM data set.
 *
 * @param {Object} dataSet - The DICOM data set to extract patient information from.
 * @returns {Object} An object containing the extracted patient fields.
 */
function dicomExtractPatient(dataSet) {
  // Validate input dataSet
  if (!dataSet || typeof dataSet !== "object") {
    console.error("Invalid DICOM dataset provided")
    return {}
  }

  // Extract patient data from the DICOM dataset
  const patientData = dicomExtractStringFields(dataSet, PATIENT_FIELDS)

  // Post-processing of specific fields
  if (patientData.birthDate) {
    patientData.birthDate = dicomFormatDate(patientData.birthDate)
  }

  // Format birthTime if present
  if (patientData.birthTime) {
    patientData.birthTime = dicomFormatTime(patientData.birthTime)
  }

  // Combine birthDate and birthTime into a JS Date object
  if (patientData.birthDate) {
    patientData.birthDateTime = dicomCreateDateTime(
      patientData.birthDate,
      patientData.birthTime
    )
  }

  // Format sex if present
  if (patientData.sex) {
    patientData.sex = dicomFormatSex(patientData.sex)
  }

  // Check if identityRemoved is present and convert to boolean if possible
  if (patientData.identityRemoved) {
    patientData.identityRemoved =
      patientData.identityRemoved.toLowerCase() === "yes"
  }

  return patientData
}

export default dicomExtractPatient
