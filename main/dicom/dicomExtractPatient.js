import dicomExtractFields from "./dicomExtractFields"
import dicomFormatName from "./dicomFormatName"
import dicomFormatDate from "./dicomFormatDate"
import dicomFormatTime from "./dicomFormatTime"
import dicomCreateDateTime from "./dicomCreateDateTime"
import dicomFormatSex from "./dicomFormatSex"

// DICOM tags for patient information
const PATIENT_FIELDS = {
  id: { tag: "x00100020" }, // Patient ID
  name: { tag: "x00100010", processor: dicomFormatName }, // Patient's Name
  nameOther: { tag: "x00101001", processor: dicomFormatName }, // Other Patient Names
  birthDate: { tag: "x00100030", processor: dicomFormatDate }, // Patient's Birth Date
  birthTime: { tag: "x00100032", processor: dicomFormatTime }, // Patient's Birth Time
  sex: { tag: "x00100040", processor: dicomFormatSex }, // Patient's Sex
  qualityControlSubject: { tag: "x00100200" }, // Quality Control Subject
  speciesDescription: { tag: "x00102201" }, // Patient Species Description
  breedDescription: { tag: "x00102292" }, // Patient Breed Description
  responsiblePersonName: { tag: "x00102297" }, // Responsible Person's Name
  responsiblePersonRole: { tag: "x00102298" }, // Responsible Person's Role
  responsibleOrganization: { tag: "x00102299" }, // Responsible Organization
  comments: { tag: "x00104000" }, // Patient Comments
  identityRemoved: {
    tag: "x00120062",
    processor: (value) => value.toLowerCase() === "yes",
  }, // Patient Identity Removed
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
  const patientData = dicomExtractFields(dataSet, PATIENT_FIELDS)

  // Combine birthDate and birthTime into a JS Date object
  if (patientData.birthDate) {
    patientData.birthDateTime = dicomCreateDateTime(
      patientData.birthDate,
      patientData.birthTime
    )
  }

  return patientData
}

export default dicomExtractPatient
