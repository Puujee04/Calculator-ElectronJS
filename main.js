const { app, BrowserWindow, ipcMain, Notification } = require("electron");
const path = require("path");
// const isDev = !app.isPackaged;
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      // will sanitize JS code
      // TODO: explain when React application is initialize
      worldSafeExecuteJavascript: true,
      // is a feature that ensures that both, your preload scripts and Electron
      // internal logic run in sparate context
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
  // isDev && win.webContents.openDevTools();
}

// if (isDev) {
//   require("electron-reload")(__dirname, {
//     electron: path.join(__dirname, "node_modules", ".bin", "electron"),
//   });
// }

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

ipcMain.on("notify", (_, message) => {
  new Notification({ title: "Notification", body: message }).show();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
