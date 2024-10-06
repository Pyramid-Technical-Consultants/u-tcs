import dicomExtractSequence from "./dicomExtractSequence.js"

// DICOM tags for fraction groups
const FRACTION_GROUP_TAGS = {
  number: { tag: "x300a0071", processor: parseInt }, // Fraction Group Number
  description: { tag: "x300a0072" }, // Fraction Group Description
  numberOfFractionsPlanned: { tag: "x300a0078", processor: parseInt }, // Number of Fractions Planned
  numberOfFractionDigitsPerDay: { tag: "x300a0079", processor: parseInt }, // Number of Fraction Digits Per Day
  repeatFractionLength: { tag: "x300a007a", processor: parseInt }, // Repeat Fraction Length
  fractionPattern: { tag: "x300a007b" }, // Fraction Pattern
  numberOfBeams: { tag: "x300a0080", processor: parseInt }, // Number of Beams
}

// DICOM tags for beams
const BEAM_TAGS = {
  number: { tag: "x300c0006", processor: parseInt }, // Beam Number
  beamDose: { tag: "x300a0084", processor: parseFloat }, // Beam Dose
  beamMeterset: { tag: "x300a0086", processor: parseFloat }, // Beam Meterset
  beamDoseType: { tag: "x300a0090" }, // Beam Dose Type
  beamAlternateDose: { tag: "x300a0091", processor: parseFloat }, // Beam Alternate Dose
  beamAlternateDoseType: { tag: "x300a0092" }, // Beam Alternate Dose Type
  beamDeliveryDuration: { tag: "x300a00c5", processor: parseFloat }, // Beam Delivery Duration
}

/**
 * Extracts fraction groups from a DICOM data set.
 *
 * @param {Object} dataSet - The DICOM data set to extract fraction groups from.
 * @param {Object} file - The file object to store the extracted fraction groups information in.
 * @returns {Object} An object containing the extracted fraction groups tags.
 */
function dicomExtractFractionGroups(dataSet, file) {
  file.fractionGroups = dicomExtractSequence(
    dataSet,
    "x300a0070",
    FRACTION_GROUP_TAGS,
    (fraction, fractionDataset) => {
      // Extract the beams for each fraction
      fraction.beams = dicomExtractSequence(
        fractionDataset,
        "x300c0004",
        BEAM_TAGS
      )
    }
  )

  if (file.fractionGroups.length > 0) {
    file.fractionGroups.sort((a, b) => a.number - b.number)
  }

  return file.fractionGroups
}

export default dicomExtractFractionGroups
