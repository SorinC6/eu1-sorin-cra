const express = require('express');

const path = require('path');
const app = express();

const pathToIndexHtml = path.join(__dirname, 'build', 'index.html');
const pathToBuildFolder = path.join(__dirname, 'build');

console.log(__dirname);
console.log(pathToIndexHtml);
console.log(pathToBuildFolder);

//allow static assets to be served off of this folder
app.use(express.static(pathToBuildFolder));

app.get('/', (req, res) => {
	res.sendfile(pathToIndexHtml);
});

app.listen(process.env.PORT || 5000);
