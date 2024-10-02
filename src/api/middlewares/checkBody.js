const Joi = require('joi');
const { ResponseError } = require('../../utils/error.js');

const slackSchema = Joi.object({
	email: Joi.string().email().required(),
	name: Joi.string().required(),
	data: Joi.string().required(),
	app: Joi.string().required(),
});

function checkSlack(req, res, next) {
	const { error } = slackSchema.validate(req.body);
	if (error) {
		return next(
			new ResponseError('Error con los datos ingresados', 400, error.details)
		);
	}
	next();
}

module.exports = { checkSlack };
