import dicomExtractGeneralPlan from "./dicomExtractGeneralPlan"
import dicomExtractPatient from "./dicomExtractPatient"
import dicomExtractFractionGroups from "./dicomExtractFractionGroups"
import dicomExtractPatientSetups from "./dicomExtractPatientSetups"
import dicomExtractBeams from "./dicomExtractBeams"
import dicomExtractApproval from "./dicomExtractApproval"
import dicomExtractMetaData from "./dicomExtractMetadata"

function dicomExtractFile(dataSet) {
  const file = {}

  dicomExtractMetaData(dataSet, file)
  dicomExtractGeneralPlan(dataSet, file)
  dicomExtractPatient(dataSet, file)
  dicomExtractFractionGroups(dataSet, file)
  dicomExtractPatientSetups(dataSet, file)
  dicomExtractBeams(dataSet, file)
  dicomExtractApproval(dataSet, file)

  return file
}

export default dicomExtractFile
