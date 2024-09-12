import dicomExtractSequence from "./dicomExtractSequence.js"

// Define DICOM tags for beam-related tags
const BEAM_TAGS = {
  number: { tag: "x300a00c0", processor: parseInt },
  name: { tag: "x300a00c2" },
  description: { tag: "x300a00c3" },
  institutionName: { tag: "x00080080" },
  institutionAddress: { tag: "x00080081" },
  institutionDepartment: { tag: "x00081040" },
  manufacturer: { tag: "x00080070" },
  manufacturerModelName: { tag: "x00081090" },
  treatmentMachineName: { tag: "x300A00B2" },
  referencedPatientSetupNumber: { tag: "x300c006a", processor: parseInt },
  referencedToleranceTableNumber: { tag: "x300c00a0", processor: parseInt },
  treatmentDeliveryType: { tag: "x300a00ce" },
  beamType: { tag: "x300a00c4" },
  radiationType: { tag: "x300a00c6" },
  scanMode: { tag: "x300a0308" },
  virtualSourceAxisDistance: { tag: "x300a030a", processor: parseFloat },
  primaryDosimeterUnit: { tag: "x300a00b3" },
  finalCumulativeMetersetWeight: { tag: "x300a010e", processor: parseFloat },
  numberOfControlPoints: { tag: "x300a0110", processor: parseInt },
}

/**
 * Extracts and processes beam information from a DICOM dataset.
 * @param {Object} dataSet - The DICOM dataset containing beam information.
 * @returns {Array} An array of processed beam objects.
 */
function dicomExtractBeams(dataSet) {
  // Extract beam sequence using the specific DICOM tag
  const beams = dicomExtractSequence(
    dataSet,
    "x300a03a2", // DICOM tag for beam sequence
    BEAM_TAGS
  )

  return beams
}

export default dicomExtractBeams
