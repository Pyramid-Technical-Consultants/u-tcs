import dicomExtractTags from "../dicom/dicomExtractTags"
import dicomFormatDate from "../dicom/dicomFormatDate"
import dicomFormatTime from "../dicom/dicomFormatTime"
import dicomCreateDateTime from "../dicom/dicomCreateDateTime"

// DICOM tags for general plan information
const GENERAL_PLAN_TAGS = {
  label: { tag: "x300a0002" }, // Plan Label
  name: { tag: "x300a0003" }, // Plan Name
  description: { tag: "x300a0004" }, // Plan Description
  date: { tag: "x300a0006", processor: dicomFormatDate }, // Plan Date
  time: { tag: "x300a0007", processor: dicomFormatTime }, // Plan Time
  treatmentProtocols: { tag: "x300a0009" }, // Treatment Protocols
  intent: { tag: "x300a000a" }, // Plan Intent
  geometry: { tag: "x300a000c" },
  referencedStructures: {
    tag: "x300c0060", // Referenced Structures
    sequence: {
      classUID: { tag: "x00081150" }, // Referenced Structure Class UID
      instanceUID: { tag: "x00081155" }, // Referenced Structure Instance UID
    },
  },
  referencedDoses: {
    tag: "x300c0060", // Referenced Doses
    sequence: {
      classUID: { tag: "x00081150" }, // Referenced Dose Class UID
      instanceUID: { tag: "x00081155" }, // Referenced Dose Instance UID
    },
  },
  treatmentSite: { tag: "x30100077" }, // Treatment Site
  treatmentSiteCodes: {
    tag: "x30100078", // Treatment Site Codes
    sequence: {
      value: { tag: "x00080100" }, // Treatment Site Code Value
      meaning: { tag: "x00080104" }, // Treatment Site Code Meaning
    },
  },
}

/**
 * Extracts general plan data from a DICOM data set.
 *
 * @param {Object} dataSet - The DICOM data set to extract general plan information from.
 * @param {Object} file - The file object to store the extracted general plan information in.
 * @returns {Object} An object containing the extracted general plan tags.
 */
function dicomExtractGeneralPlan(dataSet, file) {
  file.generalPlan = dicomExtractTags(dataSet, GENERAL_PLAN_TAGS)

  // Combine date and time into a JS Date object
  if (file.generalPlan.date) {
    file.generalPlan.dateTime = dicomCreateDateTime(
      file.generalPlan.date,
      file.generalPlan.time
    )
  }

  return file.generalPlan
}

export default dicomExtractGeneralPlan
