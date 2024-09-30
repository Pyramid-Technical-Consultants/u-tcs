export default {
  file: "File",
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
  },
}
