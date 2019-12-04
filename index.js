const {app, BrowserWindow} = require ('electron')

require('electron-reload')(__dirname)

let win 

function createWindow () {
    win = new BrowserWindow({
        width: 800,
        height: 600,
    })

win.loadFile('public/index.html')

// Ouvre les DevTools.
win.webContents.openDevTools()
win.on('closed', () => {
    win = nul
    })

}
app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    if (win === null) {
        createWindow()
      }
    })