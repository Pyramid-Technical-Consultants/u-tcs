import { useRef, useEffect } from "react"
import useCornerstoneRenderingEngine from "../../hooks/cornerstone/useCornerstoneRenderingEngine"

import { ViewportType } from "@cornerstonejs/core/dist/cjs/enums"

function CornerstoneViewport({
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

        const viewport = engine.getViewport(viewportId)

        // Get Cornerstone imageIds and fetch metadata into RAM
        // const imageIds = await createImageIdsAndCacheMetaData({
        //   StudyInstanceUID:
        //     "1.3.6.1.4.1.14519.5.2.1.7009.2403.334240657131972136850343327463",
        //   SeriesInstanceUID:
        //     "1.3.6.1.4.1.14519.5.2.1.7009.2403.226151125820845824875394858561",
        //   wadoRsRoot: "https://d3t6nz73ql33tx.cloudfront.net/dicomweb",
        // })

        console.log("viewport", viewport)

        if (viewport) {
          viewport.setStack(["dicomfile:0"], 0)

          viewport.render()
        }
      }
      render()
    }

    return () => {
      if (engine) {
        engine.disableElement(viewportId)
      }
    }
  }, [engine, viewportId, ref])

  return <div ref={ref} id={viewportId} {...props} />
}

export default CornerstoneViewport
