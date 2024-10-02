const app = require('./src/app.js');
const { PORT } = require('./src/utils/constants.js');

function main() {
	try {
		app.listen(PORT, () => {
			console.info(`[INFO] Servidor iniciado en el puerto: ${3000}`);
		});
	} catch (error) {
		console.error(`[ERROR] Error al iniciar el servidor: ${error.message}`);
	}
}

main();
