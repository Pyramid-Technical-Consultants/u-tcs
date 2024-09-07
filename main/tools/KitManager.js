import { webContents } from "electron"

class KitManager {
  constructor() {
    this.tools = []
  }

  addTool(tool) {
    this.tools.push(tool)
  }

  getTool(id) {
    return this.tools.find((tool) => tool.id === id)
  }

  getKitData() {
    return this.tools.map((tool) => tool.getKitData())
  }

  sendToAllWindows(channel, ...args) {
    webContents.getAllWebContents().forEach((webContents) => {
      webContents.send(channel, ...args)
    })
  }

  sendToolUpdate() {
    this.sendToAllWindows("tool-update", this.getKitData())
  }
}

export default KitManager
