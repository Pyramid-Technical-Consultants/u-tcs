import dicomExtractPatient from "../dicom/dicomExtractPatient"
import dicomExtractFractionGroups from "../dicom/dicomExtractFractionGroups"
import dicomExtractPatientSetups from "../dicom/dicomExtractPatientSetups"
import dicomExtractBeams from "../dicom/dicomExtractBeams"
import dicomExtractApproval from "../dicom/dicomExtractApproval"
import dicomExtractTags from "../dicom/dicomExtractTags"
import dicomFormatDate from "../dicom/dicomFormatDate"
import dicomFormatTime from "../dicom/dicomFormatTime"
import dicomCreateDateTime from "../dicom/dicomCreateDateTime"

const GENERAL_PLAN_TAGS = {
  label: { tag: "x300a0002" },
  name: { tag: "x300a0003" },
  description: { tag: "x300a0004" },
  date: { tag: "x300a0006", processor: dicomFormatDate },
  time: { tag: "x300a0007", processor: dicomFormatTime },
  treatmentProtocols: { tag: "x300a0009" },
  intent: { tag: "x300a000a" },
  geometry: { tag: "x300a000c" },
  referencedStructures: {
    tag: "x300c0060",
    sequence: {
      classUID: { tag: "x00081150" },
      instanceUID: { tag: "x00081155" },
    },
  },
  referencedDoses: {
    tag: "x300c0060",
    sequence: {
      classUID: { tag: "x00081150" },
      instanceUID: { tag: "x00081155" },
    },
  },
  treatmentSite: { tag: "x30100077" },
  treatmentSiteCodes: {
    tag: "x30100078",
    sequence: {
      value: { tag: "x00080100" },
      meaning: { tag: "x00080104" },
    },
  },
}

function dicomExtractPlan(dataSet) {
  const plan = {}

  // Extract general plan information
  plan.general = dicomExtractTags(dataSet, GENERAL_PLAN_TAGS)

  // Combine date and time into a JS Date object
  if (plan.general.date) {
    plan.general.dateTime = dicomCreateDateTime(
      plan.general.date,
      plan.general.time
    )
  }

  // Extract patient, fractions, patient setups, and beams
  plan.patient = dicomExtractPatient(dataSet)
  plan.fractions = dicomExtractFractionGroups(dataSet)
  plan.patientSetups = dicomExtractPatientSetups(dataSet)
  plan.beams = dicomExtractBeams(dataSet)
  plan.approval = dicomExtractApproval(dataSet)

  console.log(plan.general)

  return plan
}

export default dicomExtractPlan
