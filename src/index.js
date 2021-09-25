const express = require('express');
const { generateImage, characters } = require('./main.js');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
	generateImage(characters.dagron, 'mage', 4, 1000, 2000);
	res.send('saved');
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});
