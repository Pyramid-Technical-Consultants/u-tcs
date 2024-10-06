import React from "react"
import styled from "styled-components"
import BeamList from "./BeamList"
import TagList from "./TagList"
import OptionalTag from "./tags/OptionalTag"
import useLanguage from "../hooks/useLanguage"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Title = styled.h2`
  margin: 0;
`

const FRACTION_TAGS_RENDERERS = {
  numberOfFractionsPlanned: ({ key, value }) => (
    <OptionalTag
      key={key}
      icon="doughnut-chart"
      value={value ? `${value} Fractions` : null}
    />
  ),
  numberOfBeams: ({ key, value }) => (
    <OptionalTag
      key={key}
      icon="input"
      value={value ? `${value} Beams` : null}
    />
  ),
}

function FractionList({ fractionGroups, beams, patientSetups }) {
  const [i18n] = useLanguage()

  return (
    <>
      {fractionGroups?.map((fraction, index) => (
        <Container key={index}>
          <Title>
            {i18n.t("plan.fraction_group")} {fraction.number}
          </Title>
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
