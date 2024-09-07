import { useState, useEffect } from "react"

const useKit = () => {
  const [kit, setKit] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cleanup = window.ipc.on("kit-update", (kitData) => {
      setKit(kitData)
      setLoading(false)
    })

    window.ipc.getKit()

    return cleanup
  }, [])

  return [kit, loading]
}

export default useKit
