import React from "react"
import { Card, CardList } from "@blueprintjs/core"

const KitList = ({ kit }) => {
  return (
    <CardList compact={true}>
      {kit.map((tool) => (
        <Card key={tool.id}>
          <span>
            {tool.label}
            {tool.description}
            {tool.ip}
          </span>
        </Card>
      ))}
    </CardList>
  )
}

export default KitList
