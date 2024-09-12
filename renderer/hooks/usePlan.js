import { useState, useEffect } from "react"

function usePlan(id) {
  const [plan, setPlan] = useState({})

  useEffect(() => {
    if (id) {
      window.ipc.getPlan(id).then(setPlan)
    } else {
      setPlan({})
    }
  }, [id])

  return plan
}

export default usePlan
