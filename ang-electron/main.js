// const electron = require.resolve('electron')
// const BrowserWindow = electron.BrowserWindow
// const app = electron.app
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
// Enable live reload for all the files inside your project directory
//require('electron-reload')(__dirname);

let win

function createWindow () {
  win = new BrowserWindow()

  win.maximize()

  // load the dist folder from Angular
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools optionally:
  // win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
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