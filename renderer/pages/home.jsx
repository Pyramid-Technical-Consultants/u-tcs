import React from "react"
import ControlPage from "../components/ControlPage"
import ColumnLayout from "../components/ColumnLayout"
import DirectoryColumn from "../components/DirectoryColumn"
import FileNodeView from "../components/FileNodeView"
import useAllPatientFiles from "../hooks/useAllPatientFiles"

export default function HomePage() {
  const {
    fileTree,
    loading: fileTreeLoading,
    dispatch: fileTreeDispatch,
    selectedNode,
  } = useAllPatientFiles()

  return (
    <ControlPage>
      <ColumnLayout>
        <DirectoryColumn
          fileTree={fileTree}
          fileTreeLoading={fileTreeLoading}
          fileTreeDispatch={fileTreeDispatch}
        />
        <FileNodeView selectedNode={selectedNode} />
      </ColumnLayout>
    </ControlPage>
  )
}
