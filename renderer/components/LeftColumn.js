import React from "react"
import KitList from "./KitList"
import PatientFiles from "./PatientFiles"
import useKit from "../hooks/useKit"
import useAllPatientFiles from "../hooks/useAllPatientFiles"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30vw;
  min-width: 16rem;
  gap: 1rem;
`

function LeftColumn() {
  const [patientFiles, patientFilesLoading] = useAllPatientFiles()
  const [kit, kitLoading] = useKit()

  return (
    <Container>
      <PatientFiles patientFiles={patientFiles} loading={patientFilesLoading} />
      <KitList kit={kit} loading={kitLoading} />
    </Container>
  )
}

export default LeftColumn
