import { useState, useEffect } from "react"

const useMode = () => {
  const [mode, setMode] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cleanup = window.ipc.on("mode-update", (modeData) => {
      setMode(modeData)
      setLoading(false)
    })

    window.ipc.getMode()

    return cleanup
  }, [])

  return [ mode, loading ]
}

export default useMode
