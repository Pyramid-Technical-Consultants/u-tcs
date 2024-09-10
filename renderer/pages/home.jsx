import React from "react"
import ControlPage from "../components/ControlPage"
import ColumnLayout from "../components/ColumnLayout"
import LeftColumn from "../components/LeftColumn"
import PlanView from "../components/PlanView"

export default function HomePage() {
  return (
    <ControlPage>
      <ColumnLayout>
        <LeftColumn />
        <PlanView />
      </ColumnLayout>
    </ControlPage>
  )
}
