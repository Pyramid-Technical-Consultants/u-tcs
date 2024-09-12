import dicomExtractSequence from "./dicomExtractSequence.js"

const PATIENT_SETUP_TAGS = {
  number: { tag: "x300a0182", processor: parseInt },
  label: { tag: "x300a0183" },
  position: { tag: "x00185100" },
  setupTechnique: { tag: "x300a01b0" },
  setupTechniqueDescription: { tag: "x300a01b2" },
  tableTopVerticalSetupDisplacement: {
    tag: "x300a01d2",
    processor: parseFloat,
  },
  tableTopLongitudinalSetupDisplacement: {
    tag: "x300a01d4",
    processor: parseFloat,
  },
  tableTopLateralSetupDisplacement: {
    tag: "x300a01d6",
    processor: parseFloat,
  },
  
}

function dicomExtractPatientSetups(dataSet) {
  return dicomExtractSequence(dataSet, "x300a0180", PATIENT_SETUP_TAGS)
}

export default dicomExtractPatientSetups
