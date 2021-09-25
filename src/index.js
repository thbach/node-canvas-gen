const express = require('express');
const { generateImage, characters } = require('./main.js');
const app = express();
const port = process.env.PORT || 3000;

// http://example.com/api/image?char=slime&job=mage&rarity=4&hp=1025&mp=800

app.get('/image', async function (req, res) {
	const char = req.query.char;
	const job = req.query.job;
	const rarity = req.query.rarity;
	const hp = req.query.hp;
	const mp = req.query.mp;

	try {
		const img = await generateImage(characters[char], job, rarity, hp, mp);
		res.send(img);
	} catch (error) {
		res.send(error);
	}
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});
