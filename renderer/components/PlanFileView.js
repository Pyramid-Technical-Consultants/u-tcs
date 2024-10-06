import React from "react"
import styled from "styled-components"
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

function PlanFileView({ file }) {
  const displayName =
    file?.generalPlan?.name && file?.generalPlan?.label
      ? `${file.generalPlan.name} (${file.generalPlan.label})`
      : file?.generalPlan?.name || file?.generalPlan?.label
  const description = file?.generalPlan?.description

  return (
    <Container>
      <Patient>
        <PatientTags patient={file?.patient} />
      </Patient>
      <GeneralPlan>
        {displayName && <H2>{displayName}</H2>}
        {description && <p>{description}</p>}
        <PlanTags plan={file} />
      </GeneralPlan>
      <FractionList {...file} />
    </Container>
  )
}

export default PlanFileView
