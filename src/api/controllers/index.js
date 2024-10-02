const { checkSlack } = require('../middlewares/checkBody.js');
const { checkToken } = require('../middlewares/checkQuery.js');
const { sendMessage } = require('../services/slack.js');

async function postSlack(req, res, next) {
	try {
		await sendMessage(req.body);
		res.status(204).end();
	} catch (error) {
		next(error);
	}
}

module.exports = {
	postSlack: [checkToken, checkSlack, postSlack],
};
