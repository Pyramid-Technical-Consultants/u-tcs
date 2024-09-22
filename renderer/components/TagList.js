import React from "react"
import styled from "styled-components"

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`

function TagList({ tags = {}, renderers = {} }) {
  const rendererList = Object.entries(renderers)

  return (
    <Row>
      {rendererList.map(
        ([key, elementRenderer], i) =>
          // If element is non-null use it to render a Tag
          elementRenderer !== null &&
          tags[key] &&
          elementRenderer({ value: tags[key] })
      )}
    </Row>
  )
}

export default TagList
