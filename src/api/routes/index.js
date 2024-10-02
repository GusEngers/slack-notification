const api = require('express').Router();

api.route('/').get((req, res) => {
	res.json({ ping: 'pong' });
});

module.exports = api;
