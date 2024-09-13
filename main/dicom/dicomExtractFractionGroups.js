import dicomExtractSequence from "./dicomExtractSequence.js"

const FRACTION_GROUP_TAGS = {
  number: { tag: "x300a0071", processor: parseInt },
  description: { tag: "x300a0072" },
  numberOfFractionsPlanned: { tag: "x300a0078", processor: parseInt },
  numberOfFractionDigitsPerDay: { tag: "x300a0079", processor: parseInt },
  repeatFractionLength: { tag: "x300a007a", processor: parseInt },
  fractionPattern: { tag: "x300a007b" },
  numberOfBeams: { tag: "x300a0080", processor: parseInt },
}

const BEAM_TAGS = {
  number: { tag: "x300c0006", processor: parseInt },
  beamDose: { tag: "x300a0084", processor: parseFloat },
  beamMeterset: { tag: "x300a0086", processor: parseFloat },
  beamDoseType: { tag: "x300a0090" },
  beamAlternateDose: { tag: "x300a0091", processor: parseFloat },
  beamAlternateDoseType: { tag: "x300a0092" },
  beamDeliveryDuration: { tag: "x300a00c5", processor: parseFloat },
}

function dicomExtractFractionGroups(dataSet) {
  let fractionGroups = dicomExtractSequence(
    dataSet,
    "x300a0070",
    FRACTION_GROUP_TAGS,
    (fraction, fractionDataset) => {
      console.log(fractionDataset)
      // Extract the beams for each fraction
      fraction.beams = dicomExtractSequence(
        fractionDataset,
        "x300c0004",
        BEAM_TAGS
      )
    }
  )

  if (fractionGroups.length > 0) {
    fractionGroups.sort((a, b) => a.number - b.number)
  }

  return fractionGroups
}

export default dicomExtractFractionGroups
