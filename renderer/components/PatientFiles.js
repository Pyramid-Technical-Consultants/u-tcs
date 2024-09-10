import React, { useReducer, useEffect } from "react"
import { Card, Tree } from "@blueprintjs/core"
import styled from "styled-components"

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0;
  overflow: auto;
`

const ModalityToIcon = {
  CT: "media",
  MR: "media",
  US: "media",
  OT: "media",
  RTPLAN: "prescription",
  RTSTRUCT: "area-of-interest",
  RTDOSE: "heatmap",
  RTIMAGE: "mugshot",
  RTRECORD: "clipboard-file",
  RTREPORT: "clipboard-file",
}

function createInitialState(patientFiles) {
  return Object.values(patientFiles).map(({ patient, files = [] }) => ({
    id: patient.id,
    label: patient.name,
    secondaryLabel: patient.id,
    icon: patient.sex ? "person" : "cube",
    childNodes: files.map((file) => ({
      id: file.id,
      label: file.fileName,
      secondaryLabel: file.modality,
      icon: ModalityToIcon[file.modality],
    })),
    isExpanded: false,
  }))
}

function patientTreeReducer(state, action) {
  switch (action.type) {
    case "EXPAND_NODE":
      return state.map((node) =>
        node.id === action.payload ? { ...node, isExpanded: true } : node
      )
    case "COLLAPSE_NODE":
      return state.map((node) =>
        node.id === action.payload ? { ...node, isExpanded: false } : node
      )
    case "SET_PATIENT_TREE":
      return action.payload
    default:
      return state
  }
}

function PatientFiles({ patientFiles }) {
  const [patientTree, dispatch] = useReducer(
    patientTreeReducer,
    patientFiles,
    createInitialState
  )

  useEffect(() => {
    dispatch({
      type: "SET_PATIENT_TREE",
      payload: createInitialState(patientFiles),
    })
  }, [patientFiles])

  const handleNodeExpand = ({ id }) => {
    dispatch({ type: "EXPAND_NODE", payload: id })
  }

  const handleNodeCollapse = ({ id }) => {
    dispatch({ type: "COLLAPSE_NODE", payload: id })
  }

  return (
    <Container elevation={2}>
      <Tree
        contents={patientTree}
        onNodeExpand={handleNodeExpand}
        onNodeCollapse={handleNodeCollapse}
      />
    </Container>
  )
}

export default PatientFiles
