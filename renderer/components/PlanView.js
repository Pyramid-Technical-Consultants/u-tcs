import React from "react"
import styled from "styled-components"
import usePlan from "../hooks/usePlan"
import PatientTags from "./PatientTags"
import FractionList from "./FractionList"
import PlanTags from "./PlanTags"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Patient = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const GeneralPlan = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const H2 = styled.h2`
  margin: 0;
`

function PlanView({ selectedNode }) {
  const plan = usePlan(selectedNode?.id)

  const displayName =
    plan?.general?.name && plan?.general?.label
      ? `${plan.general.name} (${plan.general.label})`
      : plan?.general?.name || plan?.general?.label
  const description = plan?.general?.description

  return (
    <Container>
      <Patient>
        <PatientTags patient={plan?.patient} />
      </Patient>
      <GeneralPlan>
        {displayName && <H2>{displayName}</H2>}
        {description && <p>{description}</p>}
        <PlanTags plan={plan} />
      </GeneralPlan>
      <FractionList {...plan} />
    </Container>
  )
}

export default PlanView
