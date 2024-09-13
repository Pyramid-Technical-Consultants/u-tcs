import dicomExtractPatient from "../dicom/dicomExtractPatient"
import dicomExtractFractionGroups from "../dicom/dicomExtractFractionGroups"
import dicomExtractPatientSetups from "../dicom/dicomExtractPatientSetups"
import dicomExtractBeams from "../dicom/dicomExtractBeams"

function dicomExtractPlan(dataSet) {
  const plan = {}

  plan.patient = dicomExtractPatient(dataSet)
  plan.fractions = dicomExtractFractionGroups(dataSet)
  plan.patientSetups = dicomExtractPatientSetups(dataSet)
  plan.beams = dicomExtractBeams(dataSet)

  console.log(plan.fractions)

  return plan
}

export default dicomExtractPlan
