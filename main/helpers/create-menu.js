import { app, Menu, BrowserWindow } from "electron"
// import i18n from "../translations/i18n"

function createMenu(mainWindow) {
  function setLanguage(language) {
    // i18n.locale = language

    mainWindow.webContents.send("language-change", language)
  }

  const template = [
    {
      label: "File",
      submenu: [
        {
          label: "Exit",
          click: () => {
            app.quit()
          },
        },
      ],
    },
    {
      label: "Edit",
      submenu: [
        {
          label: "Undo",
          accelerator: "CmdOrCtrl+Z",
          role: "undo",
        },
        {
          label: "Redo",
          accelerator: "CmdOrCtrl+Shift+Z",
          role: "redo",
        },
        {
          label: "Cut",
          accelerator: "CmdOrCtrl+X",
          role: "cut",
        },
        {
          label: "Copy",
          accelerator: "CmdOrCtrl+C",
          role: "copy",
        },
        {
          label: "Paste",
          accelerator: "CmdOrCtrl+V",
          role: "paste",
        },
        {
          label: "Select All",
          accelerator: "CmdOrCtrl+A",
          role: "selectAll",
        },
      ],
    },
    {
      label: "Window",
      submenu: [
        {
          label: "Minimize",
          accelerator: "CmdOrCtrl+M",
          role: "minimize",
        },
        {
          label: "Toggle Full Screen",
          accelerator: "CmdOrCtrl+F",
          role: "toggleFullScreen",
        },
        {
          label: "Toggle Developer Tools",
          accelerator: "CmdOrCtrl+I",
          role: "toggleDevTools",
        },
        {
          label: "Close",
          accelerator: "CmdOrCtrl+W",
          role: "close",
        },
      ],
    },
    {
      label: "User",
      submenu: [
        {
          label: "Login",
          click: () => {
            mainWindow.webContents.send("login-request", {
              email: "test@test.com",
              password: "test",
            })
          },
        },
        {
          label: "Logout",
          click: () => {
            mainWindow.webContents.send("logout-request")
          },
        },
      ],
    },
    {
      label: "Mode",
      submenu: [
        {
          label: "Monitor",
          click: () => {
            mainWindow.webContents.send("mode-request", "monitor")
          },
        },
        {
          label: "Clinical",
          click: () => {
            mainWindow.webContents.send("mode-request", "clinical")
          },
        },
        {
          label: "Quality",
          click: () => {
            mainWindow.webContents.send("mode-request", "quality")
          },
        },
        {
          label: "Research",
          click: () => {
            mainWindow.webContents.send("mode-request", "research")
          },
        },
      ],
    },
    {
      label: "Language",
      submenu: [
        {
          label: "English (United States)",
          click: () => {
            setLanguage("en-US")
          },
        },
        {
          label: "English (United Kingdom)",
          click: () => {
            setLanguage("en-GB")
          },
        },
        {
          label: "Italian (Italiano)",
          click: () => {
            setLanguage("it")
          },
        },
        {
          label: "French (Français)",
          click: () => {
            setLanguage("fr")
          },
        },
      ],
    },
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

export default createMenu
