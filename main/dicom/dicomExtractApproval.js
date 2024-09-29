import dicomExtractTags from "./dicomExtractTags"
import dicomFormatDate from "./dicomFormatDate"
import dicomFormatTime from "./dicomFormatTime"
import dicomCreateDateTime from "./dicomCreateDateTime"

// DICOM tags for approval information
const APPROVAL_TAGS = {
  status: { tag: "x300e0002" }, // Approval Status
  reviewDate: { tag: "x300e0004", processor: dicomFormatDate }, // Review Date
  reviewTime: { tag: "x300e0005", processor: dicomFormatTime }, // Review Time
  reviewerName: { tag: "x300e0008" }, // Reviewer Name
}

/**
 * Extracts approval information from a DICOM dataset.
 * @param {Object} dataSet - The DICOM dataset to extract approval information from.
 * @returns {Object} An object containing the extracted approval information.
 */
function dicomExtractApproval(dataSet) {
  const approval = dicomExtractTags(dataSet, APPROVAL_TAGS)

  // Combine reviewDate and reviewTime into a JS Date object
  if (approval.reviewDate) {
    approval.reviewDateTime = dicomCreateDateTime(
      approval.reviewDate,
      approval.reviewTime
    )
  }

  return approval
}

export default dicomExtractApproval
