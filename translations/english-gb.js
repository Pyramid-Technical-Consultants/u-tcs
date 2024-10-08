export default {
  "file": "File",
  "plan": {
    "intent": {
      "curative": {
        "value": "Curative",
        "tooltip": "Intent of this plan is to cure the patient.",
      },
      "palliative": {
        "value": "Palliative",
        "tooltip": "Intent of this plan is to palliate the patient.",
      },
      "prophylactic": {
        "value": "Prophylactic",
        "tooltip": "Intent of this plan is to prevent the patient from getting sick.",
      },
      "verification": {
        "value": "Verification",
        "tooltip": "Intent of this plan is to verify a patient plan using a phantom.",
      },
      "machine_qa": {
        "value": "Machine QA",
        "tooltip": "Intent of this plan is to quality assure the delivery machine, independently of a specific patient.",
      },
      "research": {
        "value": "Research",
        "tooltip": "Intent of this plan is a research project, not intended for patient treatment.",
      },
      "service": {
        "value": "Service",
        "tooltip": "Intent of this plan is a machine repair or maintenance operation.",
      },
      "unknown": {
        "value": "Unknown",
        "tooltip": "Intent of this plan is unknown, probably a software error.",
      },
    },
    "radiationType": {
      "photon": {
        "value": "Photon",
        "tooltip": "Radiotherapy using X-rays or gamma rays.",
      },
      "electron": {
        "value": "Electron",
        "tooltip": "Radiotherapy using electrons.",
      },
      "neutron": {
        "value": "Neutron",
        "tooltip": "Radiotherapy using neutrons.",
      },
      "proton": {
        "value": "Proton",
        "tooltip": "Radiotherapy using protons.",
      },
      "ion": {
        "value": "Ion",
        "tooltip": "Radiotherapy using heavy charged particles.",
      },
      "unknown": {
        "value": "Unknown",
        "tooltip": "Unknown radiation type, probably a software error.",
      },
    }
  }
}