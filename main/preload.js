import { contextBridge, ipcRenderer } from 'electron'

const handler = {
  send(channel, value) {
    ipcRenderer.send(channel, value)
  },
  on(channel, callback) {
    const subscription = (_event, ...args) => callback(...args)
    ipcRenderer.on(channel, subscription)

    return () => {
      ipcRenderer.removeListener(channel, subscription)
    }
  },
  async getMode() {
    return await ipcRenderer.invoke("get-mode")
  },
  async getKit() {
    return await ipcRenderer.invoke("get-kit")
  },
  async getAllPatientFiles() {
    return await ipcRenderer.invoke("get-all-patient-files")
  },
}

ipcRenderer.on("login-request", async (event, credentials) => {
  await ipcRenderer.invoke("login", credentials)
})

ipcRenderer.on("logout-request", async () => {
  await ipcRenderer.invoke("logout")
})

ipcRenderer.on("mode-request", async (event, modeID) => {
  await ipcRenderer.invoke("change-mode", modeID)
})

contextBridge.exposeInMainWorld('ipc', handler)
