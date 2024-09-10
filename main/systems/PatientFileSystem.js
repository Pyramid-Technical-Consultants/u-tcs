import System from "./System"
import dicomLoadLocalDirectory from "../dicom/dicomLoadLocalDirectory"
import { ipcMain } from "electron"

class PatientFileSystem extends System {
  constructor() {
    super()
    this.patientFiles = {}
  }

  addPatientFiles(id, patientData) {
    if (!this.patientFiles[id]) {
      this.patientFiles[id] = patientData
    } else {
      const { files: oldFiles, patient: oldPatient, ...oldPatientFields } = this.patientFiles[id]
      const { files: newFiles, patient: newPatient, ...newPatientFields } = patientData

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
}

const patientFileSystem = new PatientFileSystem()

patientFileSystem.addLocalDirectory("resources/dicom")

ipcMain.handle("get-all-patient-files", async (event) => {
  const patientFiles = patientFileSystem.getAllPatientFiles()
  event.sender.send("patient-files-update", patientFiles)
  return patientFiles
})

export { patientFileSystem }
