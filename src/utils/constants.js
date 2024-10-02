require('dotenv').config();

module.exports = {
	PORT: process.env.PORT ?? 3000,
	SLACK_WEBHOOK: process.env.SLACK_WEBHOOK,
	TOKEN: process.env.TOKEN,
};
