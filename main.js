const electron      = require('electron')
const app           = electron.app
const BrowserWindow = electron.BrowserWindow;

// Define main window as a global variable
let win

function createWindow() {
	console.log('main → create window - START')
	console.log('main →    initialize main window')
	win = new BrowserWindow({width: 800, height: 600})
	console.log('main →    load index HTML file')
	win.loadURL(`file://${__dirname}/index.html`)
	console.log('main →    preparing main window behavior')
	win.on('closed', function() {
		win = null;
	})
	console.log('main → create window - END')
}

function initApp() {
	app.on('ready', createWindow)
	// OSX specific support (lol)
	app.on('window-all-closed', function() {
		if(process.platform !== 'darwin') {
			app.quit()
		}
	}).on('activate', function() {
		if (win === null) {
			createWindow();
		}
	})
}

/******************
 * INITIALIZATION *
 ******************/
initApp();

/************
 * APP CODE *
 ************/
