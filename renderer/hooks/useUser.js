import { useState, useEffect } from "react"

const useUser = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    return window.ipc.on("user-update", (userData) => {
      setUser(userData)
      setLoading(false)
    })
  }, [])

  return { user, loading }
}

export default useUser
