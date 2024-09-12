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

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.h2`
  margin: 0;
`

function BeamList({ beams }) {
  if (!beams || beams.length === 0) return null

  return (
    <Container>
      <Header>
        <Title>Planned Beams</Title>
      </Header>

      <BeamContainer>
        {beams.map((beam) => (
          <BeamListItem key={beam.number} beam={beam} />
        ))}
      </BeamContainer>
    </Container>
  )
}

export default BeamList
