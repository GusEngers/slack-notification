const { postSlack } = require('../controllers/index.js');

const api = require('express').Router();

api.route('/').get((req, res) => {
	res.json({ ping: 'pong' });
});
api.route('/slack').post(postSlack);

module.exports = api;
