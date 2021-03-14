// // Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require("electron")
const shell = require("electron").shell
const path = require("path")

function createWindow () {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }, 
    width: 800,
    height: 600
  })

  // Load main window html file.
  mainWindow.loadFile("src/index/index.html")

  // Customized menu options.
  var menu = Menu.buildFromTemplate([
    {
      label: "Electron",
      submenu: [
        {label: "Preference"},
        {label: "Developers"},
        {type: "separator"},
        {label: "Exit", click(){app.quit()}}
      ]
    },
    {
      label: "File",
      submenu: [
        {label: "Upload"},
        {label: "Download"}
      ]
    }
  ])
  Menu.setApplicationMenu(menu)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})