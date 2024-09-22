import React from "react"
import styled from "styled-components"
import { CardList } from "@blueprintjs/core"
import BeamListItem from "./BeamListItem"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const BeamContainer = styled(CardList)`
  display: flex;
  flex-direction: column;
`

function BeamList({ beams, patientSetups = [] }) {
  if (!beams || beams.length === 0) return null

  const itemProps = beams?.map((beam) => {
    const patientSetup = patientSetups.find(
      (setup) => setup.number === beam.referencedPatientSetupNumber
    )

    return {
      beam,
      patientSetup,
    }
  })

  return (
    <Container>
      <BeamContainer>
        {itemProps.map(({ beam, ...rest }) => (
          <BeamListItem key={beam.number} beam={beam} {...rest} />
        ))}
      </BeamContainer>
    </Container>
  )
}

export default BeamList
