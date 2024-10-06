import { useState, useEffect } from "react"

function usePatientFile(id) {
  const [file, setFile] = useState({})

  useEffect(() => {
    if (id) {
      window.ipc.getFile(id).then((file) => {
        setFile(file ?? {})
      })
    } else {
      setFile({})
    }
  }, [id])

  return file
}

export default usePatientFile
