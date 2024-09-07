import React from "react"
import KitList from "../components/KitList"
import ControlPage from "../components/ControlPage"
import useKit from "../hooks/useKit"

import "@blueprintjs/core/lib/css/blueprint.css"

export default function HomePage() {
  const [kit, loading] = useKit()

  return (
    <ControlPage>
      <KitList kit={kit} />
    </ControlPage>
  )
}
