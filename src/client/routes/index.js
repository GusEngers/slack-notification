const path = require('path');

const client = require('express').Router();

client.get('/', (req, res) => {
	try {
		res.sendFile(path.join(__dirname, '../views/home.html'));
	} catch (error) {
		res.sendFile(path.join(__dirname, '../views/error.html'));
	}
});

client.get("/*", (req, res) => {
	try {
		res.sendFile(path.join(__dirname, '../views/not-found.html'));
	} catch (error) {
		res.sendFile(path.join(__dirname, '../views/error.html'));
	}
})

module.exports = client;
