// TODO: Solve subprocess node issue
// const electron = require("electron")
// const path = require("path")
// const BrowserWindow = electron.remote.BrowserWindow

// bind config button to connection configuration window
const configButton = document.getElementById("configButton")
configButton.addEventListener("click", openConnectionWindow)

function openConnectionWindow(event) {
    console.log("config button clicked")
    event.preventDefault()
    window.open("../component/connectionWindow/connectionWindow.html")
    // const filePath = path.join("file://", __dirname, "connectionWindow.html")
    // const conncetionWindow = new BrowserWindow({frame: false, width: 400, height: 200})
    // conncetionWindow.on("close", function(){conncetionWindow = null})
    // conncetionWindow.loadURL(filePath)
    // conncetionWindow.show()
}