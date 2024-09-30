export default {
  file: "Fichier",
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
  },
}
