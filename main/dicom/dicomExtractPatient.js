import dicomExtractStringFields from "./dicomExtractStringFields"

// https://dicom.innolitics.com/ciods/patient/patient-module
const fields = {
  name: "x00100010", // Patient's name
  nameOther: "x00101001", // Patient's name (alternative representation)
  id: "x00100020", // Patient ID
  birthDate: "x00100030", // Patient's birth date
  birthTime: "x00100032", // Patient's birth time
  sex: "x00100040", // Patient's sex
  qualityControlSubject: "x00100200", // Patient's quality control subject
  speciesDescription: "x00102201", // Patient's species description
  breedDescription: "x00102292", // Patient's breed description (breed)
  responsiblePersonName: "x00102297", // Patient's responsible person name
  responsiblePersonRole: "x00102298", // Patient's responsible person role
  responsibleOrganization: "x00102299", // Patient's responsible organization
  comments: "x00104000", // Patient's comments
  identityRemoved: "x00120062", // Patient's identity removed
}

// Extracts patient data from a DICOM data set
function dicomExtractPatient(dataSet) {
  return dicomExtractStringFields(dataSet, fields)
}

export default dicomExtractPatient
