import { useState, useEffect } from "react"

const useAllPatientFiles = () => {
  const [patientFiles, setPatientFiles] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cleanup = window.ipc.on(
      "patient-files-update",
      (patientFilesData) => {
        setPatientFiles(patientFilesData)
        setLoading(false)
      }
    )

    window.ipc.getAllPatientFiles()

    return cleanup
  }, [])

  return [patientFiles, loading]
}

export default useAllPatientFiles
