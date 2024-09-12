import React from "react"
import styled from "styled-components"
import { Button, Card } from "@blueprintjs/core"
import DoseTag from "./tags/DoseTag"
import TreatmentDeliveryTypeTag from "./tags/TreatmentDeliveryTypeTag"
import RadiationTypeTag from "./tags/RadiationTypeTag"
import BeamTypeTag from "./tags/BeamTypeTag"
import ScanModeTag from "./tags/ScanModeTag"

const Container = styled(Card)`
  display: flex;
  flex-direction: row;

  align-items: center;
  overflow: hidden;

  gap: 0.5rem;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0.25rem;
`

const Grow = styled.div`
  flex-grow: 1;
`

const Number = styled.h3`
  margin: 0;
  margin-right: 0.5rem;
`

function BeamListItem({ beam, patientSetup }) {

  console.log(patientSetup)

  return (
    <Container>
      <Number>{beam?.number}</Number>
      <Column>
        <Row>
          {beam?.name} {beam?.description}
        </Row>
        <Row>
          <TreatmentDeliveryTypeTag value={beam?.treatmentDeliveryType} />
          <RadiationTypeTag value={beam?.radiationType} />
          <BeamTypeTag value={beam?.beamType} />
          <ScanModeTag value={beam?.scanMode} />
        </Row>
      </Column>
      <Grow />
      <DoseTag
        dose={beam?.finalCumulativeMetersetWeight}
        units={beam?.primaryDosimeterUnit}
        large
      />
      <Button icon="chevron-right" minimal />
    </Container>
  )
}

export default BeamListItem
