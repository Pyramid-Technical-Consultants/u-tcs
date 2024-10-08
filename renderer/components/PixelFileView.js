import React from "react"
import styled from "styled-components"
import dynamic from 'next/dynamic'

const CornerstoneViewport = dynamic(() => import("./cornerstone/CornerstoneViewport"), {
  ssr: false
})

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
`

function PixelFileView({ file }) {
  console.log(file)

  return (
    <Container>
      <CornerstoneViewport file={file} />
    </Container>
  )
}

export default PixelFileView
