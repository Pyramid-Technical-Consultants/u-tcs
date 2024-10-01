export default {
  file: "File",
  patient: {
    sex: {
      male: {
        value: "Maschio",
        tooltip: "Il paziente è di sesso maschile.",
      },
      female: {
        value: "Femmina",
        tooltip: "Il paziente è di sesso femminile.",
      },
      other: {
        value: "Altro",
        tooltip: "Il paziente è di un sesso diverso da maschio o femmina.",
      },
      unknown: {
        value: "Sconosciuto",
        tooltip:
          "Il sesso del paziente è sconosciuto, probabilmente un errore del software.",
      },
    },
  },
  plan: {
    intent: {
      curative: {
        value: "Curativo",
        tooltip: "L'obiettivo di questo piano è curare il paziente.",
      },
      palliative: {
        value: "Palliativo",
        tooltip:
          "L'obiettivo di questo piano è alleviare i sintomi del paziente.",
      },
      prophylactic: {
        value: "Profilattico",
        tooltip:
          "L'obiettivo di questo piano è prevenire l'infezione del paziente.",
      },
      verification: {
        value: "Verifica",
        tooltip:
          "L'obiettivo di questo piano è verificare un piano paziente utilizzando un fantoccio.",
      },
      machine_qa: {
        value: "QA Macchina",
        tooltip:
          "L'obiettivo di questo piano è garantire la qualità della macchina di erogazione, indipendentemente da un paziente specifico.",
      },
      research: {
        value: "Ricerca",
        tooltip:
          "L'obiettivo di questo piano è per un progetto di ricerca, non destinato al trattamento del paziente.",
      },
      service: {
        value: "Servizio",
        tooltip:
          "L'obiettivo di questo piano è un'operazione di riparazione o manutenzione della macchina.",
      },
      unknown: {
        value: "Sconosciuto",
        tooltip:
          "L'obiettivo di questo piano è sconosciuto, probabilmente un errore del software.",
      },
    },
    radiationType: {
      photon: {
        value: "Fotone",
        tooltip: "Radioterapia con raggi X o raggi gamma.",
      },
      electron: {
        value: "Elettrone",
        tooltip: "Radioterapia con elettroni.",
      },
      neutron: {
        value: "Neutrone",
        tooltip: "Radioterapia con neutroni.",
      },
      proton: {
        value: "Protone",
        tooltip: "Radioterapia con protoni.",
      },
      ion: {
        value: "Ione",
        tooltip: "Radioterapia con particelle cariche pesanti.",
      },
      unknown: {
        value: "Sconosciuto",
        tooltip:
          "Tipo di radiazione sconosciuto, probabilmente un errore del software.",
      },
    },
    beamType: {
      static: {
        value: "Statico",
        tooltip:
          "Gli attributi del punto di controllo non cambiano tra i punti.",
      },
      dynamic: {
        value: "Dinamico",
        tooltip:
          "Uno o più attributi del punto di controllo cambiano tra i punti.",
      },
      unknown: {
        value: "Sconosciuto",
        tooltip:
          "Tipo di tipo di fascio sconosciuto, probabilmente un errore del software.",
      },
    },
    treatmentDeliveryType: {
      treatment: {
        value: "Trattamento",
        tooltip:
          "Tipo di somministrazione di trattamento normale per il paziente.",
      },
      continuation: {
        value: "Continuazione",
        tooltip:
          "Una continuazione di un trattamento precedentemente interrotto.",
      },
      open_portfilm: {
        value: "Film Portale Aperto",
        tooltip: "Acquisizione dell'immagine del portale con campo aperto.",
      },
      trmt_portfilm: {
        value: "Film Portale di Trattamento",
        tooltip:
          "Acquisizione dell'immagine del portale con portale di trattamento.",
      },
      setup: {
        value: "Configurazione",
        tooltip:
          "Questo fascio non eroga il trattamento ma è utilizzato per impostare le posizioni del gantry, del lettino e della macchina per immagini di configurazione a raggi X o misurazioni.",
      },
      unknown: {
        value: "Sconosciuto",
        tooltip:
          "Tipo di somministrazione di trattamento sconosciuto, probabilmente un errore del software.",
      },
    },
    setupTechnique: {
      isocentric: {
        value: "Isocentrico",
        tooltip:
          "Il fascio è centrato all'interno del paziente per il trattamento da più angolazioni.",
      },
      fixed_ssd: {
        value: "SSD Fisso",
        tooltip:
          "Il fascio mantiene una distanza costante dalla sorgente alla pelle.",
      },
      tbi: {
        value: "Irradiazione Corporea Totale",
        tooltip: "Setup per irradiare uniformemente l'intero corpo.",
      },
      breast_bridge: {
        value: "Ponte Mammario",
        tooltip:
          "Utilizza un ponte mammario per posizionare e stabilizzare il seno.",
      },
      skin_apposition: {
        value: "Apposizione Cutanea",
        tooltip:
          "Il fascio è posizionato direttamente sulla pelle o molto vicino ad essa.",
      },
      unknown: {
        value: "Sconosciuto",
        tooltip:
          "Tecnica di setup sconosciuta, probabilmente un errore del software.",
      },
    },
    patientPositionType: {
      hfp: {
        value: "Testa Prima Prono",
        tooltip:
          "Paziente posizionato con la testa avanti e sdraiato a pancia in giù (prono).",
      },
      hfs: {
        value: "Testa Prima Supino",
        tooltip:
          "Paziente posizionato con la testa avanti e sdraiato sulla schiena (supino).",
      },
      hfdr: {
        value: "Testa Prima Decubito Destro",
        tooltip:
          "Paziente posizionato con la testa avanti e sdraiato sul lato destro.",
      },
      hfdl: {
        value: "Testa Prima Decubito Sinistro",
        tooltip:
          "Paziente posizionato con la testa avanti e sdraiato sul lato sinistro.",
      },
      ffdr: {
        value: "Piedi Prima Decubito Destro",
        tooltip:
          "Paziente posizionato con i piedi avanti e sdraiato sul lato destro.",
      },
      ffdl: {
        value: "Piedi Prima Decubito Sinistro",
        tooltip:
          "Paziente posizionato con i piedi avanti e sdraiato sul lato sinistro.",
      },
      ffp: {
        value: "Piedi Prima Prono",
        tooltip:
          "Paziente posizionato con i piedi avanti e sdraiato a pancia in giù (prono).",
      },
      ffs: {
        value: "Piedi Prima Supino",
        tooltip:
          "Paziente posizionato con i piedi avanti e sdraiato sulla schiena (supino).",
      },
      lfp: {
        value: "Sinistra Prima Prono",
        tooltip:
          "Paziente posizionato con il lato sinistro avanti e sdraiato a pancia in giù (prono).",
      },
      lfs: {
        value: "Sinistra Prima Supino",
        tooltip:
          "Paziente posizionato con il lato sinistro avanti e sdraiato sulla schiena (supino).",
      },
      rfp: {
        value: "Destra Prima Prono",
        tooltip:
          "Paziente posizionato con il lato destro avanti e sdraiato a pancia in giù (prono).",
      },
      rfs: {
        value: "Destra Prima Supino",
        tooltip:
          "Paziente posizionato con il lato destro avanti e sdraiato sulla schiena (supino).",
      },
      afdr: {
        value: "Anteriore Prima Decubito Destro",
        tooltip:
          "Paziente posizionato con il lato anteriore avanti e sdraiato sul lato destro.",
      },
      afdl: {
        value: "Anteriore Prima Decubito Sinistro",
        tooltip:
          "Paziente posizionato con il lato anteriore avanti e sdraiato sul lato sinistro.",
      },
      pfdr: {
        value: "Posteriore Prima Decubito Destro",
        tooltip:
          "Paziente posizionato con il lato posteriore avanti e sdraiato sul lato destro.",
      },
      pfdl: {
        value: "Posteriore Prima Decubito Sinistro",
        tooltip:
          "Paziente posizionato con il lato posteriore avanti e sdraiato sul lato sinistro.",
      },
      sitting: {
        value: "Seduto",
        tooltip: "Paziente è seduto.",
      },
      unknown: {
        value: "Sconosciuto",
        tooltip:
          "Tipo di posizione sconosciuto, probabilmente un errore del software.",
      },
    },
  },
}
