import React from "react"
import styled from "styled-components"
import BeamList from "./BeamList"
import TagList from "./TagList"
import OptionalTag from "./tags/OptionalTag"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Title = styled.h2`
  margin: 0;
`

const FRACTION_TAGS_RENDERERS = {
  numberOfFractionsPlanned: ({ value }) => (
    <OptionalTag icon="doughnut-chart" value={value ? `${value} Fractions` : null} />
  ),
  numberOfBeams: ({ value }) => (
    <OptionalTag icon="input" value={value ? `${value} Beams` : null} />
  ),
}

function FractionList({ fractions, beams, patientSetups }) {
  return (
    <>
      {fractions?.map((fraction, index) => (
        <Container key={index}>
          <Title>Fraction Group {fraction.number}</Title>
          <TagList tags={fraction} renderers={FRACTION_TAGS_RENDERERS} />
          <BeamList
            key={index}
            beams={fraction?.beams?.map(({ number, ...rest }) => {
              return {
                ...rest,
                number,
                ...beams.find((b) => b.number === number),
              }
            })}
            patientSetups={patientSetups}
          />
        </Container>
      ))}
    </>
  )
}

export default FractionList
