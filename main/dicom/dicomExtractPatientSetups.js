import dicomExtractSequence from "./dicomExtractSequence.js"

// DICOM tags for patient setups
const PATIENT_SETUP_TAGS = {
  number: { tag: "x300a0182", processor: parseInt }, // Patient Setup Number
  label: { tag: "x300a0183" }, // Patient Setup Label
  position: { tag: "x00185100" }, // Patient Setup Position
  setupTechnique: { tag: "x300a01b0" }, // Setup Technique
  setupTechniqueDescription: { tag: "x300a01b2" }, // Setup Technique Description
  tableTopVerticalSetupDisplacement: {
    tag: "x300a01d2",
    processor: parseFloat, // Table Top Vertical Setup Displacement
  },
  tableTopLongitudinalSetupDisplacement: {
    tag: "x300a01d4",
    processor: parseFloat,
  },
  tableTopLateralSetupDisplacement: {
    tag: "x300a01d6",
    processor: parseFloat, // Table Top Lateral Setup Displacement
  },
}

/**
 * Extracts patient setups from a DICOM data set.
 *
 * @param {Object} dataSet - The DICOM data set to extract patient setups from.
 * @param {Object} file - The file object to store the extracted patient setups information in.
 * @returns {Object} An object containing the extracted patient setups tags.
 */
function dicomExtractPatientSetups(dataSet, file) {
  file.patientSetups = dicomExtractSequence(
    dataSet,
    "x300a0180",
    PATIENT_SETUP_TAGS
  )
}

export default dicomExtractPatientSetups
