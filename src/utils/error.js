class ResponseError extends Error {
	constructor(message, statusCode, errors = []) {
		super(message);
		this.statusCode = statusCode;
		this.errors = errors;
	}

	get response() {
		return {
			message: this.message,
			statusCode: this.statusCode,
			errors: this.errors,
		};
	}
}

function handleApiError(err, req, res, next) {
	if (err instanceof ResponseError) {
		res.status(err.statusCode).json(err.response);
	} else {
		res.status(500).json({
			message: 'Un error inesperado ha ocurrido',
			statusCode: 500,
			errors: [err.message],
		});
	}
}

module.exports = { ResponseError, handleApiError };
