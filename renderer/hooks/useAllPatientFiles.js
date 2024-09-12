import { useReducer, useState, useEffect, useMemo } from "react"

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

function convertPatientFilesToTree(patientFiles) {
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
      isSelected: false,
    })),
    isExpanded: false,
    isSelected: false,
  }))
}

function findNode(nodes, id) {
  for (const node of nodes) {
    if (node.id === id) {
      return node
    }
    if (node.childNodes) {
      const childNode = findNode(node.childNodes, id)
      if (childNode) {
        return childNode
      }
    }
  }
  return null
}

function findSelectedNode(nodes) {
  for (const node of nodes) {
    if (node.isSelected) {
      return node
    }
    if (node.childNodes) {
      const childNode = findSelectedNode(node.childNodes)
      if (childNode) {
        return childNode
      }
    }
  }
  return null
}

function deselectAllNodes(node) {
  if (node.childNodes) {
    return {
      ...node,
      isSelected: false,
      childNodes: node.childNodes.map(deselectAllNodes),
    }
  } else {
    return {
      ...node,
      isSelected: false,
    }
  }
}

function patientTreeReducer(state, action) {
  switch (action.type) {
    case "EXPAND_NODE":
      return state.map((node) =>
        node.id === action.id ? { ...node, isExpanded: true } : node
      )
    case "COLLAPSE_NODE":
      return state.map((node) =>
        node.id === action.id ? { ...node, isExpanded: false } : node
      )
    case "DESELECT_ALL_NODES":
      return state.map(deselectAllNodes)
    case "SELECT_NODE":
      const newState = state.map(deselectAllNodes)
      const selectedNode = findNode(newState, action.id)
      if (selectedNode) {
        selectedNode.isSelected = true
      }
      return newState
    case "SET_TREE":
      return action.tree
    default:
      return state
  }
}

const useAllPatientFiles = () => {
  const [fileTree, dispatch] = useReducer(patientTreeReducer, [])
  const [loading, setLoading] = useState(true)

  const selectedNode = useMemo(() => {
    return findSelectedNode(fileTree)
  }, [fileTree])

  useEffect(() => {
    const cleanup = window.ipc.on(
      "patient-files-update",
      (patientFilesData) => {
        dispatch({
          type: "SET_TREE",
          tree: convertPatientFilesToTree(patientFilesData),
        })
        setLoading(false)
      }
    )

    window.ipc.getAllPatientFiles()

    return cleanup
  }, [])

  return { fileTree, loading, dispatch, selectedNode }
}

export default useAllPatientFiles
