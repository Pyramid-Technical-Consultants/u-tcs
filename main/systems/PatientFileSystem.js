import System from "./System"
import { ipcMain } from "electron"
import dicomLoadLocalDirectory from "../dicom/dicomLoadLocalDirectory"
import dicomLoadLocalFile from "../dicom/dicomLoadLocalFile"
import dicomExtractFile from "../dicom/dicomExtractFile"

const fs = require("fs")

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
        ...oldPatientTags
      } = this.patientFiles[id]
      const {
        files: newFiles,
        patient: newPatient,
        ...newPatientTags
      } = patientData

      this.patientFiles[id] = {
        ...oldPatientTags,
        ...newPatientTags,
        patient: {
          ...oldPatient,
          ...newPatient,
        },
        files: [...oldFiles, ...newFiles],
      }
    }

    const newDicomFiles = patientData.files.filter((file) =>
      file.metaData.fileName.endsWith(".dcm")
    )

    for (const dicomFile of newDicomFiles) {
      if (dicomFile.metaData.id && !this.dicomFiles[dicomFile.metaData.id]) {
        this.dicomFiles[dicomFile.metaData.id] = dicomFile
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

  async getFile(id) {
    const file = this.dicomFiles[id]
    if (file) {
      const dataSet = await dicomLoadLocalFile(file.metaData.filePath)

      return dicomExtractFile(dataSet)
    }
  }

  async getFileBlob(id) {
    const file = this.dicomFiles[id]
    if (file) {
      try {
        const data = await fs.promises.readFile(file.metaData.filePath)
        return data
      } catch (error) {
        console.error("Error reading file:", error)
        throw error // This will be caught in the renderer process
      }
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

ipcMain.handle("get-file", async (event, id) => {
  return await patientFileSystem.getFile(id)
})

ipcMain.handle("get-file-blob", async (event, id) => {
  return await patientFileSystem.getFileBlob(id)
})

export { patientFileSystem }
