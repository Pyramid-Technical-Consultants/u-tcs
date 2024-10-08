import dicomExtractSequence from "./dicomExtractSequence.js"
import dicomFormatFloatArray from "./dicomFormatFloatArray.js"

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
  controlPoints: {
    tag: "x300a0111",
    sequence: {
      index: { tag: "x300a0112", processor: parseInt },
      nominalBeamEnergy: { tag: "x300a0114", processor: parseFloat },
      doseRateSet: { tag: "x300a0115", processor: parseFloat },
      gantryAngle: { tag: "x300a011e", processor: parseFloat },
      gantryRotationDirection: { tag: "x300a011f" },
      isocenterPosition: { tag: "x300a012c", processor: dicomFormatFloatArray },
      sourceToSurfaceDistance: { tag: "x300a0130", processor: parseFloat },
      cumulativeMetersetWeight: { tag: "x300a0134", processor: parseFloat },
      beamLimitingDevicePositions: {
        tag: "x300a011a",
        sequence: {
          type: { tag: "x300a00b8" },
          positions: { tag: "x300a011c", processor: dicomFormatFloatArray },
        },
      },
      referencedDoseReferences: {
        tag: "x300c0050",
        sequence: {
          cumulativeDoseReferenceCoefficient: {
            tag: "x300a010c",
            processor: parseFloat,
          },
          referencedDoseReferenceNumber: {
            tag: "x300c0051",
            processor: parseInt,
          },
        },
      },
    },
  },
}

/**
 * Extracts and processes beam information from a DICOM dataset.
 * @param {Object} dataSet - The DICOM dataset containing beam information.
 * @param {Object} file - The file object to store the extracted beam information in.
 * @returns {Array} An array of processed beam objects.
 */
function dicomExtractBeams(dataSet, file) {
  // Determine the tag to use based on the presence of the "x300a03a2" tag
  // If the tag is not found, use "x300a00b0" as a fallback
  // This is the deference between RT ion beams and normal RT beams
  const tag = dataSet.elements["x300a03a2"] ? "x300a03a2" : "x300a00b0"

  file.beams = dicomExtractSequence(dataSet, tag, BEAM_TAGS)

  if (file.beams.length > 0) {
    file.beams.sort((a, b) => a.number - b.number)
  }

  return file.beams
}

export default dicomExtractBeams
