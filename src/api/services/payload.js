function fullDate() {
	const date = new Date();
	const ds = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
	const hs = `${date.getHours()}:${date
		.getMinutes()
		.toString()
		.padStart(2, '0')}`;
	return `${ds} ${hs}`;
}

function generatePayload({ email, name, data, app }) {
	const date = fullDate();
	// Distintas secciones que tendrá el payload
	const blocks = [
		`*Tienes un correo de:*\n${email} desde ${app.toUpperCase()}`,
		`*Nombre:*\n${name}`,
		`*Fecha y Hora:*\n${date}`,
		`*Contenido:*\n${data}`,
	];
	// Generamos el payload
	const payload = {
		blocks: blocks.map((block) => {
			return {
				type: 'section',
				text: {
					type: 'mrkdwn',
					text: block,
				},
			};
		}),
	};
	return payload;
}

module.exports = { generatePayload };
