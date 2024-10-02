const { TOKEN } = require('../../utils/constants.js');
const { ResponseError } = require('../../utils/error.js');

function checkToken(req, res, next) {
	const { token } = req.query;
	if (!token) throw new ResponseError('Es necesario el token de acceso', 401);
	if (token !== TOKEN) throw new ResponseError('Token incorrecto', 401);
	next();
}

module.exports = { checkToken };
