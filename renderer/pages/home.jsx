import React from "react"
import KitList from "../components/KitList"
import ControlPage from "../components/ControlPage"
import PlanView from "../components/PlanView"
import ColumnLayout from "../components/ColumnLayout"

import useKit from "../hooks/useKit"

import "@blueprintjs/core/lib/css/blueprint.css"

export default function HomePage() {
  const [kit, loading] = useKit()

  return (
    <ControlPage>
      <ColumnLayout>
        <KitList kit={kit} />
        <PlanView />
      </ColumnLayout>
    </ControlPage>
  )
}
