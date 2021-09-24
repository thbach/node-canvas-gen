const fs = require('fs');
const { createCanvas, loadImage, registerFont } = require('canvas');

registerFont('assets/fonts/ferrum.otf', { family: 'ferrum' });

const bgSrc = 'assets/card_bg.jpg';
const starSrc = 'assets/star.png';
const characters = {
	slime: {
		src: 'assets/slime.png',
		name: 'Slime',
	},
	dagron: {
		src: 'assets/dagron.png',
		name: 'Dagron',
	},
	female1: {
		src: 'assets/female1.png',
		name: 'Female',
	},
	male1: {
		src: 'assets/male1.png',
		name: 'Male',
	},
};

// DOIT

// size in pixels
const canvas = createCanvas(400, 500);
const ctx = canvas.getContext('2d');

const main = async (char, job, rarity, hp, mp) => {
	// Draw BG
	const layer1 = await loadImage(bgSrc);
	ctx.drawImage(layer1, 0, 0, 400, 500);

	// Draw CHAR
	const layer2 = await loadImage(char.src);
	ctx.drawImage(layer2, 10, 10, 380, 380); // xy w/h

	// Draw STAR
	const star = await loadImage(starSrc);
	for (let i = 0; i < rarity; i++) {
		ctx.drawImage(star, 370 - i * 20, 400, 20, 20); // xy w/h
	}

	// TEXT
	ctx.font = '30px ferrum';
	ctx.fillText(job, 10, 445);
	ctx.font = '40px ferrum';
	ctx.fillText(char.name, 10, 490);

	ctx.font = '20px ferrum';
	ctx.textAlign = 'right';
	ctx.fillText(`${hp} hp`, 390, 470);

	ctx.font = '20px ferrum';
	ctx.textAlign = 'right';
	ctx.fillText(`${mp} mp`, 390, 490);

	const buffer = canvas.toBuffer('image/png');

	// SEND BACK or
	fs.writeFileSync('./image.png', buffer);
};

main(characters.dagron, 'mage', 5, 100, 400);
