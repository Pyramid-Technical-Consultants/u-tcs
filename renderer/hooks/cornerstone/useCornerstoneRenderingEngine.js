import { useState, useEffect } from "react"
import {
  RenderingEngine,
  init as csRenderInit,
} from "@cornerstonejs/core/dist/cjs"

import * as cornerstone from "@cornerstonejs/core/dist/cjs"
// import * as cornerstoneTools from '@cornerstonejs/tools';
// import cornerstoneDICOMImageLoader from '@cornerstonejs/dicom-image-loader';

window.cornerstone = cornerstone
// window.cornerstoneTools = cornerstoneTools;

function useCornerstoneRenderingEngine(id = "default") {
  const [engine, setEngine] = useState(null)

  useEffect(() => {
    const initEngine = async () => {
      await csRenderInit()

      setEngine(new RenderingEngine(id))
    }
    initEngine()
  }, [id])

  return engine
}

export default useCornerstoneRenderingEngine
