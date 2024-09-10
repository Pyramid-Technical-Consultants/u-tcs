import React from "react"
import { Card, CardList } from "@blueprintjs/core"
import styled from "styled-components"

const Container = styled(CardList)`
  display: flex;
  flex-direction: column;
  max-height: 50%;
  flex-shrink: 0;
`

const KitList = ({ kit, loading }) => {
  return (
    <Container compact={true} elevation={2}>
      {kit.map((tool) => (
        <Card key={tool.id}>
          <span>
            {tool.label}
            {tool.description}
            {tool.ip}
          </span>
        </Card>
      ))}
    </Container>
  )
}

export default KitList
