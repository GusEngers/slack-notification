const { default: axios } = require('axios');
const { generatePayload } = require('./payload.js');
const { SLACK_WEBHOOK } = require('../../utils/constants.js');
const { ResponseError } = require('../../utils/error.js');

async function sendMessage({ email, name, data, app }) {
	try {
		const payload = generatePayload({ email, name, data, app });
		await axios.post(SLACK_WEBHOOK, payload);
	} catch (error) {
		throw new ResponseError('Error al enviar el mensaje a Slack', 400, [
			error.message,
		]);
	}
}

module.exports = { sendMessage };
