import { useRef, useEffect } from "react"
import styled from "styled-components"
import useCornerstoneRenderingEngine from "../../hooks/cornerstone/useCornerstoneRenderingEngine"

import { ViewportType } from "@cornerstonejs/core/dist/cjs/enums"

import cornerstoneDICOMImageLoader from "@cornerstonejs/dicom-image-loader"

const ViewportElement = styled.div`
  width: 100%;
  height: 100%;
`

function CornerstoneViewport({
  file,
  engineID = "default",
  viewportId = "default",
  options = {},
  ...props
}) {
  const engine = useCornerstoneRenderingEngine(engineID)
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current && engine) {
      console.log("engine", engine)
      async function render() {
        engine.enableElement({
          viewportId,
          element: ref.current,
          type: ViewportType.STACK,
          ...options,
        })

        const bytes = await window.ipc.getFileBlob(file.metaData.id)

        const blob = new Blob([bytes])

        const imageId =
          cornerstoneDICOMImageLoader.wadouri.fileManager.add(blob)

        const viewport = engine.getViewport(viewportId)

        viewport.setStack([imageId], 0)

        viewport.render()
      }
      render()
    }

    return () => {
      if (engine) {
        engine.disableElement(viewportId)
      }
    }
  }, [engine, viewportId, ref, file])

  return <ViewportElement ref={ref} id={viewportId} {...props} />
}

export default CornerstoneViewport
