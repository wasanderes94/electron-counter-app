// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronApi', {
    increment: (param) => ipcRenderer.invoke('increment', param),
    decrement: (param) => ipcRenderer.invoke('decrement', param)
})