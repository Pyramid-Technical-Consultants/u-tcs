import React from "react"
import styled from "styled-components"
import usePlan from "../hooks/usePlan"
import PatientFields from "./PatientFields"
import BeamList from "./BeamList"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

function PlanView({ selectedNode }) {
  const plan = usePlan(selectedNode?.id)

  return (
    <Container>
      <PatientFields patient={plan?.patient} />
      <BeamList beams={plan?.beams} />
    </Container>
  )
}

export default PlanView
