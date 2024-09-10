import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  gap: 1rem;
  padding: 1rem;
`

function ColumnLayout({ children }) {
  return <Container>{children}</Container>
}

export default ColumnLayout
