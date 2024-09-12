import React from "react"
import styled from "styled-components"
import usePlan from "../hooks/usePlan"
import PatientTags from "./PatientTags"
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
      <PatientTags patient={plan?.patient} />
      <BeamList {...plan} />
    </Container>
  )
}

export default PlanView
