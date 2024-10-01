export default {
  file: "Fichier",
  patient: {
    sex: {
      male: {
        value: "Homme",
        tooltip: "Le patient est de sexe masculin.",
      },
      female: {
        value: "Femme",
        tooltip: "Le patient est de sexe féminin.",
      },
      other: {
        value: "Autre",
        tooltip: "Le patient est d'un sexe autre que masculin ou féminin.",
      },
      unknown: {
        value: "Inconnu",
        tooltip:
          "Le sexe du patient est inconnu, probablement une erreur logicielle.",
      },
    },
  },
  plan: {
    intent: {
      curative: {
        value: "Curatif",
        tooltip: "L'objectif de ce plan est de guérir le patient.",
      },
      palliative: {
        value: "Palliatif",
        tooltip:
          "L'objectif de ce plan est de soulager les symptômes du patient.",
      },
      prophylactic: {
        value: "Prophylactique",
        tooltip:
          "L'objectif de ce plan est de prévenir l'infection du patient.",
      },
      verification: {
        value: "Vérification",
        tooltip:
          "L'objectif de ce plan est de vérifier un plan patient en utilisant un fantôme.",
      },
      machine_qa: {
        value: "QA Machine",
        tooltip:
          "L'objectif de ce plan est d'assurer la qualité de la machine de délivrance, indépendamment d'un patient spécifique.",
      },
      research: {
        value: "Recherche",
        tooltip:
          "L'objectif de ce plan est pour un projet de recherche, non destiné au traitement du patient.",
      },
      service: {
        value: "Service",
        tooltip:
          "L'objectif de ce plan est une opération de réparation ou de maintenance de la machine.",
      },
      unknown: {
        value: "Inconnu",
        tooltip:
          "L'objectif de ce plan est inconnu, probablement une erreur logicielle.",
      },
    },
    radiationType: {
      photon: {
        value: "Photon",
        tooltip: "Radiothérapie utilisant des rayons X ou des rayons gamma.",
      },
      electron: {
        value: "Électron",
        tooltip: "Radiothérapie utilisant des électrons.",
      },
      neutron: {
        value: "Neutron",
        tooltip: "Radiothérapie utilisant des neutrons.",
      },
      proton: {
        value: "Proton",
        tooltip: "Radiothérapie utilisant des protons.",
      },
      ion: {
        value: "Ion",
        tooltip: "Radiothérapie utilisant des particules chargées lourdes.",
      },
      unknown: {
        value: "Inconnu",
        tooltip:
          "Type de radiation inconnu, probablement une erreur logicielle.",
      },
    },
    beamType: {
      static: {
        value: "Statique",
        tooltip:
          "Les attributs du point de contrôle ne changent pas entre les points.",
      },
      dynamic: {
        value: "Dynamique",
        tooltip:
          "Un ou plusieurs attributs du point de contrôle changent entre les points.",
      },
      unknown: {
        value: "Inconnu",
        tooltip:
          "Type de type de faisceau inconnu, probablement une erreur logicielle.",
      },
    },
    treatmentDeliveryType: {
      treatment: {
        value: "Traitement",
        tooltip: "Type de délivrance de traitement normal pour le patient.",
      },
      continuation: {
        value: "Continuation",
        tooltip: "Une continuation d'un traitement précédemment interrompu.",
      },
      open_portfilm: {
        value: "Film de Portail Ouvert",
        tooltip: "Acquisition de l'image du portail avec champ ouvert.",
      },
      trmt_portfilm: {
        value: "Film de Portail de Traitement",
        tooltip:
          "Acquisition de l'image du portail avec le port de traitement.",
      },
      setup: {
        value: "Configuration",
        tooltip:
          "Ce faisceau ne délivre pas de traitement mais est utilisé pour définir les positions du portique, du lit et de la machine pour des images de configuration aux rayons X ou des mesures.",
      },
      unknown: {
        value: "Inconnu",
        tooltip:
          "Type de délivrance de traitement inconnu, probablement une erreur logicielle.",
      },
    },
    setupTechnique: {
      isocentric: {
        value: "Isocentrique",
        tooltip:
          "Le faisceau est centré dans le patient pour un traitement multi-angle.",
      },
      fixed_ssd: {
        value: "SSD Fixe",
        tooltip:
          "Le faisceau maintient une distance constante entre la source et la peau.",
      },
      tbi: {
        value: "Irradiation Corporelle Totale",
        tooltip: "Configuration pour irradier uniformément tout le corps.",
      },
      breast_bridge: {
        value: "Pont Mammaire",
        tooltip:
          "Utilise un pont mammaire pour positionner et stabiliser le sein.",
      },
      skin_apposition: {
        value: "Apposition Cutanée",
        tooltip:
          "Le faisceau est positionné directement sur la peau ou très près de celle-ci.",
      },
      unknown: {
        value: "Inconnu",
        tooltip:
          "Technique de configuration inconnue, probablement une erreur logicielle.",
      },
    },
    patientPositionType: {
      hfp: {
        value: "Tête Première Prone",
        tooltip:
          "Patient positionné tête la première et allongé face vers le sol (prone).",
      },
      hfs: {
        value: "Tête Première Supin",
        tooltip:
          "Patient positionné tête la première et allongé sur le dos (supin).",
      },
      hfdr: {
        value: "Tête Première Décubitus Droit",
        tooltip:
          "Patient positionné tête la première et allongé sur le côté droit.",
      },
      hfdl: {
        value: "Tête Première Décubitus Gauche",
        tooltip:
          "Patient positionné tête la première et allongé sur le côté gauche.",
      },
      ffdr: {
        value: "Pieds Premiers Décubitus Droit",
        tooltip:
          "Patient positionné pieds les premiers et allongé sur le côté droit.",
      },
      ffdl: {
        value: "Pieds Premiers Décubitus Gauche",
        tooltip:
          "Patient positionné pieds les premiers et allongé sur le côté gauche.",
      },
      ffp: {
        value: "Pieds Premiers Prone",
        tooltip:
          "Patient positionné pieds les premiers et allongé face vers le sol (prone).",
      },
      ffs: {
        value: "Pieds Premiers Supin",
        tooltip:
          "Patient positionné pieds les premiers et allongé sur le dos (supin).",
      },
      lfp: {
        value: "Gauche Première Prone",
        tooltip:
          "Patient positionné côté gauche en avant et allongé face vers le sol (prone).",
      },
      lfs: {
        value: "Gauche Première Supin",
        tooltip:
          "Patient positionné côté gauche en avant et allongé sur le dos (supin).",
      },
      rfp: {
        value: "Droit Première Prone",
        tooltip:
          "Patient positionné côté droit en avant et allongé face vers le sol (prone).",
      },
      rfs: {
        value: "Droit Première Supin",
        tooltip:
          "Patient positionné côté droit en avant et allongé sur le dos (supin).",
      },
      afdr: {
        value: "Antérieur Première Décubitus Droit",
        tooltip:
          "Patient positionné côté antérieur en avant et allongé sur le côté droit.",
      },
      afdl: {
        value: "Antérieur Première Décubitus Gauche",
        tooltip:
          "Patient positionné côté antérieur en avant et allongé sur le côté gauche.",
      },
      pfdr: {
        value: "Postérieur Première Décubitus Droit",
        tooltip:
          "Patient positionné côté postérieur en avant et allongé sur le côté droit.",
      },
      pfdl: {
        value: "Postérieur Première Décubitus Gauche",
        tooltip:
          "Patient positionné côté postérieur en avant et allongé sur le côté gauche.",
      },
      sitting: {
        value: "Assis",
        tooltip: "Patient est assis.",
      },
      unknown: {
        value: "Inconnu",
        tooltip:
          "Type de position inconnu, probablement une erreur logicielle.",
      },
    },
    scanMode: {
      none: {
        value: "Aucun",
        tooltip:
          "Aucune analyse du faisceau n'est effectuée; le faisceau reste stationnaire.",
      },
      uniform: {
        value: "Uniforme",
        tooltip:
          "Le faisceau est scanné pour créer une distribution uniforme de dose sur le champ.",
      },
      modulated: {
        value: "Modulé",
        tooltip:
          "Le faisceau est scanné avec une intensité variable pour moduler la distribution de dose sur le champ.",
      },
      modulated_spec: {
        value: "Modulé Spécifié",
        tooltip:
          "Le faisceau est scanné avec un motif de modulation spécifique, tel que défini par le type de mode de balayage.",
      },
      unknown: {
        value: "Inconnu",
        tooltip:
          "Mode de balayage inconnu, probablement une erreur logicielle.",
      },
    },
  },
}
