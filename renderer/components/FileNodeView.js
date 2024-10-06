import React from "react"
import { Card } from "@blueprintjs/core"
import styled from "styled-components"
import FileView from "./FileView"

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 70vw;
  gap: 1rem;
  overflow-x: hidden;
  overflow-y: auto;
`

function FileNodeView({ selectedNode }) {
  return (
    <Container elevation={2}>
      <FileView id={selectedNode?.id} />
    </Container>
  )
}

export default FileNodeView
