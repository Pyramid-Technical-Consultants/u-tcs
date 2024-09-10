import React from "react"
import { Card } from "@blueprintjs/core"
import styled from "styled-components"

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 70vw;
`

function PlanView() {
  return <Container elevation={2}>PlanView</Container>
}

export default PlanView
