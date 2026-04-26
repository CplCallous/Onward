const { app, BrowserWindow } = require('electron');
function createWindow () {
  const win = new BrowserWindow({
    width: 1200, 
    height: 800, 
    frame: false, // For that minimalist borderless look
    backgroundColor: '#090613',
    webPreferences: { nodeIntegration: true, contextIsolation: false }
  });
  win.loadFile('index.html');
}
app.whenReady().then(createWindow);
