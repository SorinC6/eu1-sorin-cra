const express = require('express');
const path = require('path');
const app = express();

// cra works is, when webpack runs, it creates a build folder
// which contains the index.html and the bundle.js

const pathToBuildFolder = path.join(__dirname, 'build');
const pathToIndexHtml = path.join(pathToBuildFolder, 'index.html');

console.log(__dirname);
console.log(pathToIndexHtml);
console.log(pathToBuildFolder);

// 2- allow static assets to be served off of this folder (build)!!
app.use(express.static(pathToBuildFolder));

app.get('/', (req, res) => {
	// 1- res.sendFile
	res.sendFile(pathToIndexHtml);
});

app.listen(process.env.PORT || 5000);
