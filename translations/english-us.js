export default {
  file: "File",
  patient: {
    sex: {
      male: {
        value: "Male",
        tooltip: "The patient is male.",
      },
      female: {
        value: "Female",
        tooltip: "The patient is female.",
      },
      other: {
        value: "Other",
        tooltip: "The patient is of a sex other than male or female.",
      },
      unknown: {
        value: "Unknown",
        tooltip: "The patient sex is unknown, probably a software error.",
      },
    },
  },
  plan: {
    fraction_group: "Fraction group",
    intent: {
      curative: {
        value: "Curative",
        tooltip: "Intent of this plan is to cure the patient.",
      },
      palliative: {
        value: "Palliative",
        tooltip: "Intent of this plan is to palliate the patient.",
      },
      prophylactic: {
        value: "Prophylactic",
        tooltip:
          "Intent of this plan is to prevent the patient from getting sick.",
      },
      verification: {
        value: "Verification",
        tooltip:
          "Intent of this plan is to verify a patient plan using a phantom.",
      },
      machine_qa: {
        value: "Machine QA",
        tooltip:
          "Intent of this plan is to quality assure the delivery machine, independently of a specific patient.",
      },
      research: {
        value: "Research",
        tooltip:
          "Intent of this plan is a research project, not intended for patient treatment.",
      },
      service: {
        value: "Service",
        tooltip:
          "Intent of this plan is a machine repair or maintenance operation.",
      },
      unknown: {
        value: "Unknown",
        tooltip: "Intent of this plan is unknown, probably a software error.",
      },
    },
    radiationType: {
      photon: {
        value: "Photon",
        tooltip: "Radiotherapy using X-rays or gamma rays.",
      },
      electron: {
        value: "Electron",
        tooltip: "Radiotherapy using electrons.",
      },
      neutron: {
        value: "Neutron",
        tooltip: "Radiotherapy using neutrons.",
      },
      proton: {
        value: "Proton",
        tooltip: "Radiotherapy using protons.",
      },
      ion: {
        value: "Ion",
        tooltip: "Radiotherapy using heavy charged particles.",
      },
      unknown: {
        value: "Unknown",
        tooltip: "Unknown radiation type, probably a software error.",
      },
    },
    beamType: {
      static: {
        value: "Static",
        tooltip: "Control point attributes do not change between points.",
      },
      dynamic: {
        value: "Dynamic",
        tooltip: "One or more control point attributes change between points.",
      },
      unknown: {
        value: "Unknown",
        tooltip: "Unknown beam type, probably a software error.",
      },
    },
    treatmentDeliveryType: {
      treatment: {
        value: "Treatment",
        tooltip: "Normal patient treatment delivery type.",
      },
      continuation: {
        value: "Continuation",
        tooltip: "A continuation of a previously interrupted treatment.",
      },
      open_portfilm: {
        value: "Open Port Film",
        tooltip: "Portal image acquisition with open field",
      },
      trmt_portfilm: {
        value: "Treatment Port Film",
        tooltip: "Portal image acquisition with treatment port.",
      },
      setup: {
        value: "Setup",
        tooltip:
          "This beam does not deliver treatment but is used to set the gantry, couch, and machine positions for X-ray setup images or measurements.",
      },
      unknown: {
        value: "Unknown",
        tooltip: "Unknown treatment delivery type, probably a software error.",
      },
    },
    setupTechnique: {
      isocentric: {
        value: "Isocentric",
        tooltip:
          "Beam is centered within the patient for multi-angle treatment.",
      },
      fixed_ssd: {
        value: "Fixed SSD",
        tooltip:
          "Beam maintains a constant distance from the source to the skin",
      },
      tbi: {
        value: "Total Body Irradiation",
        tooltip: "Setup for irradiating the entire body uniformly.",
      },
      breast_bridge: {
        value: "Breast Bridge",
        tooltip: "Uses a breast bridge to position and stabilize the breast.",
      },
      skin_apposition: {
        value: "Skin Apposition",
        tooltip:
          "Beam positioned directly on or very close to the skin surface.",
      },
      unknown: {
        value: "Unknown",
        tooltip: "Unknown setup technique, probably a software error.",
      },
    },
    patientPositionType: {
      hfp: {
        value: "Head First Prone",
        tooltip: "Patient positioned head-first and lying face down (prone).",
      },
      hfs: {
        value: "Head First Supine",
        tooltip:
          "Patient positioned head-first and lying on their back (supine).",
      },
      hfdr: {
        value: "Head First Decubitus Right",
        tooltip: "Patient positioned head-first and lying on their right side.",
      },
      hfdl: {
        value: "Head First Decubitus Left",
        tooltip: "Patient positioned head-first and lying on their left side.",
      },
      ffdr: {
        value: "Feet First Decubitus Right",
        tooltip: "Patient positioned feet-first and lying on their right side.",
      },
      ffdl: {
        value: "Feet First Decubitus Left",
        tooltip: "Patient positioned feet-first and lying on their left side.",
      },
      ffp: {
        value: "Feet First Prone",
        tooltip: "Patient positioned feet-first and lying face down (prone).",
      },
      ffs: {
        value: "Feet First Supine",
        tooltip:
          "Patient positioned feet-first and lying on their back (supine).",
      },
      lfp: {
        value: "Left First Prone",
        tooltip:
          "Patient positioned left side first and lying face down (prone).",
      },
      lfs: {
        value: "Left First Supine",
        tooltip:
          "Patient positioned left side first and lying on their back (supine).",
      },
      rfp: {
        value: "Right First Prone",
        tooltip:
          "Patient positioned right side first and lying face down (prone).",
      },
      rfs: {
        value: "Right First Supine",
        tooltip:
          "Patient positioned right side first and lying on their back (supine).",
      },
      afdr: {
        value: "Anterior First Decubitus Right",
        tooltip:
          "Patient positioned with the anterior side first and lying on their right side.",
      },
      afdl: {
        value: "Anterior First Decubitus Left",
        tooltip:
          "Patient positioned with the anterior side first and lying on their left side.",
      },
      pfdr: {
        value: "Posterior First Decubitus Right",
        tooltip:
          "Patient positioned with the posterior side first and lying on their right side.",
      },
      pfdl: {
        value: "Posterior First Decubitus Left",
        tooltip:
          "Patient positioned with the posterior side first and lying on their left side.",
      },
      sitting: {
        value: "Seated",
        tooltip: "Patient is seated.",
      },
      unknown: {
        value: "Unknown",
        tooltip: "Unknown position type, probably a software error.",
      },
    },
    scanMode: {
      none: {
        value: "None",
        tooltip: "No beam scanning is performed; the beam remains stationary.",
      },
      uniform: {
        value: "Uniform",
        tooltip:
          "Beam is scanned to create a uniform dose distribution across the field.",
      },
      modulated: {
        value: "Modulated",
        tooltip:
          "Beam is scanned with varying intensity to modulate dose distribution across the field.",
      },
      modulated_spec: {
        value: "Modulated Specified",
        tooltip:
          "Beam is scanned with a specific modulated pattern, as defined by the scan mode type.",
      },
      unknown: {
        value: "Unknown",
        tooltip: "Unknown scan mode, probably a software error.",
      },
    },
  },
}
