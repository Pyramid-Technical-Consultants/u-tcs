import React from "react"
import styled from "styled-components"
import { Button, Card } from "@blueprintjs/core"
import MetersetTag from "./tags/MetersetTag"
import DoseTag from "./tags/DoseTag"
import TreatmentDeliveryTypeTag from "./tags/TreatmentDeliveryTypeTag"
import RadiationTypeTag from "./tags/RadiationTypeTag"
import BeamTypeTag from "./tags/BeamTypeTag"
import ScanModeTag from "./tags/ScanModeTag"
import PositionTag from "./tags/PositionTag"
import SetupTechniqueTag from "./tags/SetupTechniqueTag"
import ControlPointsTag from "./tags/ControlPointsTag"

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

const LeftRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0.25rem;

  align-items: center;
  justify-content: flex-start;
`

const RightRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0.25rem;

  align-items: center;
  justify-content: flex-end;
`

const Grow = styled.div`
  flex-grow: 1;
`

const Number = styled.h3`
  margin: 0;
  margin-right: 0.5rem;
`

function BeamListItem({ beam, patientSetup }) {
  let meterset = beam?.beamMeterset
  if (typeof meterset !== "number") {
    meterset = beam?.finalCumulativeMetersetWeight
  }

  const isDosing =
    beam?.treatmentDeliveryType === "TREATMENT" ||
    beam?.treatmentDeliveryType === "CONTINUATION"

  return (
    <Container>
      <Number>{beam?.number}</Number>
      <Column>
        <LeftRow>
          {beam?.name} {beam?.description}
        </LeftRow>
        <LeftRow>
          <TreatmentDeliveryTypeTag value={beam?.treatmentDeliveryType} />
          <RadiationTypeTag value={beam?.radiationType} />
          <BeamTypeTag value={beam?.beamType} />
          <ScanModeTag value={beam?.scanMode} />
        </LeftRow>
        <LeftRow>
          <SetupTechniqueTag value={patientSetup?.setupTechnique} />
          <PositionTag value={patientSetup?.position} />
        </LeftRow>
        <LeftRow>
          <ControlPointsTag value={beam?.numberOfControlPoints} />
        </LeftRow>
      </Column>
      <Grow />
      <RightRow>{isDosing && <DoseTag value={beam?.beamDose} />}</RightRow>
      {isDosing && (
        <RightRow>
          <MetersetTag
            value={meterset}
            units={beam?.primaryDosimeterUnit}
            large
          />
        </RightRow>
      )}
      <Button icon="chevron-right" minimal />
    </Container>
  )
}

export default BeamListItem
