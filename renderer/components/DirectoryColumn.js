import React from "react"
import KitList from "./KitList"
import FileTree from "./FileTree"
import useKit from "../hooks/useKit"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30vw;
  min-width: 16rem;
  gap: 1rem;
`

function DirectoryColumn({ fileTree, fileTreeLoading, fileTreeDispatch }) {

  const [kit, kitLoading] = useKit()

  return (
    <Container>
      <FileTree
        fileTree={fileTree}
        loading={fileTreeLoading}
        dispatch={fileTreeDispatch}
      />
      <KitList kit={kit} loading={kitLoading} />
    </Container>
  )
}

export default DirectoryColumn
