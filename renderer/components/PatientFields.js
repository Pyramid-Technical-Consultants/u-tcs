import React from "react"
import styled from "styled-components"
import IDTag from "./tags/IDTag"
import SexTag from "./tags/SexTag"
import DateTag from "./tags/DateTag"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Name = styled.h1`
  margin: 0;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`

function PatientFields({ patient = {} }) {
  return (
    <Container>
      {patient.name && <Name>{patient.name}</Name>}

      <Row>
        <IDTag value={patient.id} />
        <SexTag value={patient.sex} />
        <DateTag value={patient.birthDateTime} />
      </Row>

      {patient.qualityControlSubject && (
        <span>
          <b>Quality Control Subject:</b> {patient.qualityControlSubject}
        </span>
      )}
      {patient.speciesDescription && (
        <span>
          <b>Species Description:</b> {patient.speciesDescription}
        </span>
      )}
      {patient.breedDescription && (
        <span>
          <b>Breed Description:</b> {patient.breedDescription}
        </span>
      )}
      {patient.responsiblePersonName && (
        <span>
          <b>Responsible Person Name:</b> {patient.responsiblePersonName}
        </span>
      )}
      {patient.responsiblePersonRole && (
        <span>
          <b>Responsible Person Role:</b> {patient.responsiblePersonRole}
        </span>
      )}
      {patient.responsibleOrganization && (
        <span>
          <b>Responsible Organization:</b> {patient.responsibleOrganization}
        </span>
      )}
      {patient.identityRemoved && (
        <span>
          <b>Identity Removed:</b> {patient.identityRemoved}
        </span>
      )}
      {patient.comments && (
        <p>
          <b>Comments:</b> {patient.comments}
        </p>
      )}
    </Container>
  )
}

export default PatientFields
