const path = require('path');

const client = require('express').Router();

client.get('/', (req, res) => {
	try {
		res.sendFile(path.join(__dirname, '../views/home.html'));
	} catch (error) {
		res.json('Error');
	}
});

module.exports = client;
