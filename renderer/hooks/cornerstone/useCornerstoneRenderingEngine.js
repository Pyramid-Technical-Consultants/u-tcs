import { useState, useEffect } from "react"

import dicomParser from "dicom-parser"

import {
  RenderingEngine,
  init as csRenderInit,
} from "@cornerstonejs/core/dist/cjs"

import * as cornerstone from "@cornerstonejs/core/dist/cjs"
// import * as cornerstoneTools from "@cornerstonejs/tools/dist/cjs"
import cornerstoneDICOMImageLoader from "@cornerstonejs/dicom-image-loader"

window.cornerstone = cornerstone
// window.cornerstoneTools = cornerstoneTools

function useCornerstoneRenderingEngine(id = "default") {
  const [engine, setEngine] = useState(null)

  useEffect(() => {
    const initEngine = async () => {
      cornerstoneDICOMImageLoader.external.cornerstone = cornerstone
      cornerstoneDICOMImageLoader.external.dicomParser = dicomParser
      cornerstoneDICOMImageLoader.configure({
        useWebWorkers: true,
        decodeConfig: {
          convertFloatPixelDataToInt: false,
        },
      })

      let maxWebWorkers = 1

      if (navigator.hardwareConcurrency) {
        maxWebWorkers = Math.min(navigator.hardwareConcurrency, 7)
      }

      var config = {
        maxWebWorkers,
        startWebWorkersOnDemand: false,
        taskConfiguration: {
          decodeTask: {
            initializeCodecsOnStartup: false,
            strict: false,
          },
        },
      }

      cornerstoneDICOMImageLoader.webWorkerManager.initialize(config)

      await csRenderInit()

      setEngine(new RenderingEngine(id))
    }
    initEngine()
  }, [id])

  return engine
}

export default useCornerstoneRenderingEngine
