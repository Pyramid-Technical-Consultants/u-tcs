import System from "./System"
import { ipcMain } from "electron"
import dicomLoadLocalDirectory from "../dicom/dicomLoadLocalDirectory"
import dicomLoadLocalFile from "../dicom/dicomLoadLocalFile"
import dicomExtractPatient from "../dicom/dicomExtractPatient"
import dicomExtractBeams from "../dicom/dicomExtractBeams"

class PatientFileSystem extends System {
  constructor() {
    super()
    this.patientFiles = {}
    this.dicomFiles = {}
  }

  addPatientFiles(id, patientData) {
    if (!this.patientFiles[id]) {
      this.patientFiles[id] = patientData
    } else {
      const {
        files: oldFiles,
        patient: oldPatient,
        ...oldPatientFields
      } = this.patientFiles[id]
      const {
        files: newFiles,
        patient: newPatient,
        ...newPatientFields
      } = patientData

      this.patientFiles[id] = {
        ...oldPatientFields,
        ...newPatientFields,
        patient: {
          ...oldPatient,
          ...newPatient,
        },
        files: [...oldFiles, ...newFiles],
      }
    }

    const newDicomFiles = patientData.files.filter((file) =>
      file.fileName.endsWith(".dcm")
    )
    for (const dicomFile of newDicomFiles) {
      if (dicomFile.id && !this.dicomFiles[dicomFile.id]) {
        this.dicomFiles[dicomFile.id] = dicomFile
      }
    }
  }

  async addLocalDirectory(directory) {
    const patientFileObject = await dicomLoadLocalDirectory(directory)

    for (let id in patientFileObject) {
      this.addPatientFiles(id, patientFileObject[id])
    }
  }

  getAllPatientFiles() {
    return this.patientFiles
  }

  getPatientFiles(id) {
    return this.patientFiles[id]
  }

  async getPlan(id) {
    const fileInfo = this.dicomFiles[id]
    if (fileInfo) {
      const dataSet = await dicomLoadLocalFile(fileInfo.filePath)

      let plan = {}

      plan.patient = dicomExtractPatient(dataSet)
      plan.beams = dicomExtractBeams(dataSet)

      return plan
    }
  }
}

const patientFileSystem = new PatientFileSystem()

patientFileSystem.addLocalDirectory("resources/dicom")

ipcMain.handle("get-all-patient-files", async (event) => {
  const patientFiles = patientFileSystem.getAllPatientFiles()
  event.sender.send("patient-files-update", patientFiles)
  return patientFiles
})

ipcMain.handle("get-plan", async (event, id) => {
  return await patientFileSystem.getPlan(id)
})

export { patientFileSystem }
