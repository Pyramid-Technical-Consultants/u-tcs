import React from "react"
import usePatientFile from "../hooks/usePatientFile"
import PlanFileView from "./PlanFileView"
import PixelFileView from "./PixelFileView"

function FileView({ id }) {
  const file = usePatientFile(id)

  if (file?.metaData?.modality === "RTPLAN") {
    return <PlanFileView file={file} />
  } else if (file?.metaData?.modality === "CT") {
    return <PixelFileView file={file} />
  }

  return null
}

export default FileView
