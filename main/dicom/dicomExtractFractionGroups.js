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

function dicomExtractFractionGroups(dataSet) {
  let fractionGroups = dicomExtractSequence(
    dataSet,
    "x300a0070",
    FRACTION_GROUP_TAGS
  )

  if (fractionGroups.length > 0) {
    fractionGroups.sort((a, b) => a.number - b.number)
  }

  return fractionGroups
}

export default dicomExtractFractionGroups
