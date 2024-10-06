import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

function PixelFileView({ file }) {
  console.log(file)

  return <Container></Container>
}

export default PixelFileView
