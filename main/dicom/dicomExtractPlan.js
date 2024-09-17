import dicomExtractPatient from "../dicom/dicomExtractPatient"
import dicomExtractFractionGroups from "../dicom/dicomExtractFractionGroups"
import dicomExtractPatientSetups from "../dicom/dicomExtractPatientSetups"
import dicomExtractBeams from "../dicom/dicomExtractBeams"

const GENERAL_TAGS = {
  label: { tag: "x300a0002" },
}

function dicomExtractPlan(dataSet) {
  const plan = {}

  plan.patient = dicomExtractPatient(dataSet)
  plan.fractions = dicomExtractFractionGroups(dataSet)
  plan.patientSetups = dicomExtractPatientSetups(dataSet)
  plan.beams = dicomExtractBeams(dataSet)

  return plan
}

export default dicomExtractPlan
