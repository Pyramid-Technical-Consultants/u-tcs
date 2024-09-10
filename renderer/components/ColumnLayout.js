import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

function ColumnLayout({ children }) {
  return <Container>{children}</Container>
}

export default ColumnLayout
