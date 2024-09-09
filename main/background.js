import path from "path"
import { app, ipcMain } from "electron"
import serve from "electron-serve"
import { createWindow } from "./helpers"
import createMenu from "./helpers/create-menu"
import Store from "electron-store"
import IGXDevice from "./tools/pyramid/IGXDevice"
import KitManager from "./tools/KitManager"
import { modeSystem } from "./systems/ModeSystem"

const store = new Store({})
const kitManager = new KitManager()

const isProd = process.env.NODE_ENV === "production"

if (isProd) {
  serve({ directory: "app" })
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`)
}

;(async () => {
  await app.whenReady()

  const mainWindow = createWindow("main", {
    width: 1000,
    height: 600,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  })

  createMenu(mainWindow) // Call createMenu here

  if (isProd) {
    await mainWindow.loadURL("app://./home")
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/home`)
  }

  // mainWindow.maximize()
  mainWindow.show()

  kitManager.addTool(new IGXDevice({ ip: "192.168.100.179" }))
  kitManager.addTool(new IGXDevice({ ip: "192.168.100.213" }))

  kitManager.sendToolUpdate()

})()

app.on("window-all-closed", () => {
  app.quit()
})

ipcMain.on("message", async (event, arg) => {
  event.reply("message", `${arg} World!`)
})

ipcMain.handle("login", async (event, credentials) => {
  const user = {
    email: credentials.email,
  }
  store.set("user-data", user)
  event.sender.send("user-update", user)
  return user
})

ipcMain.handle("logout", async (event) => {
  store.delete("user-data")
  event.sender.send("user-update", null)
  return null
})

ipcMain.handle("get-kit", async (event) => {
  const kitData = kitManager.getKitData()
  event.sender.send("kit-update", kitData)
  return kitData
})