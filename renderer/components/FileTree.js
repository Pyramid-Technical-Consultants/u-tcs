import React from "react"
import { Card, Tree } from "@blueprintjs/core"
import styled from "styled-components"

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0;
  overflow: auto;
`

function FileTree({ fileTree, loading, dispatch }) {

  const handleNodeExpand = ({ id }) => {
    dispatch({ type: "EXPAND_NODE", id })
  }

  const handleNodeCollapse = ({ id }) => {
    dispatch({ type: "COLLAPSE_NODE", id })
  }

  const handleNodeClick = ({ id }) => {
    dispatch({ type: "SELECT_NODE", id })
  }

  return (
    <Container elevation={2}>
      <Tree
        loading={loading}
        contents={fileTree}
        onNodeExpand={handleNodeExpand}
        onNodeCollapse={handleNodeCollapse}
        onNodeClick={handleNodeClick}
      />
    </Container>
  )
}

export default FileTree
