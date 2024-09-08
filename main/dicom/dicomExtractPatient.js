function dicomExtractPatient(dataSet) {
  const patient = {}
  const fields = {
    name: "x00100010",
    nameOther: "x00101001",
    id: "x00100020",
    birthDate: "x00100030",
    birthTime: "x00100032",
    sex: "x00100040",
    qualityControlSubject: "x00100200",
    speciesDescription: "x00102201",
    breedDescription: "x00102292",
    responsiblePersonName: "x00102297",
    responsiblePersonRole: "x00102298",
    responsibleOrganization: "x00102299",
    comments: "x00104000",
    identityRemoved: "x00120062",
  }

  for (const [key, tag] of Object.entries(fields)) {
    const value = dataSet.string(tag)
    if (value !== undefined) {
      patient[key] = value
    }
  }

  return patient
}

export default dicomExtractPatient
