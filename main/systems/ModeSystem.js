import System from "./System"
import Store from "electron-store"
import { ipcMain, nativeTheme } from "electron"

const store = new Store({
  name: "mode",
  defaults: {
    mode: "monitor",
  },
})

class ModeSystem extends System {
  constructor() {
    super()
    this.modeData = this.setMode(store.get("mode-id"))
  }

  createModeData(modeID) {
    const mode = {
      id: modeID,
      clinical: modeID === "clinical",
      label:
        String(modeID).charAt(0).toUpperCase() +
        String(modeID).slice(1).toLowerCase(),
    }
    return mode
  }

  setMode(modeID) {
    if (!modeID) {
      modeID = "monitor"
    }

    this.modeData = this.createModeData(modeID)
    nativeTheme.themeSource = this.modeData.clinical ? "light" : "dark"
    store.set("mode-id", modeID)
    return this.modeData
  }

  getModeData() {
    return this.modeData
  }
}

const modeSystem = new ModeSystem()

ipcMain.handle("get-mode", async (event) => {
  const modeData = modeSystem.getModeData()
  event.sender.send("mode-update", modeData)
  return modeData
})

ipcMain.handle("change-mode", async (event, modeID) => {
  const modeData = modeSystem.setMode(modeID)
  event.sender.send("mode-update", modeData)
  return modeData
})

export { modeSystem }
