const { app, Menu, ipcMain, webContents } = require("electron")

function createMenu(mainWindow) {
  const template = [
    // ... existing menu items ...
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
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

module.exports = createMenu
