const { Client } = require('../src/index.js');

const rcon = new Client({
	ip: '45.88.230.41',
	port: '27416 ',
	password: 'plebdev'
});

rcon.login();

rcon.on('connected', () => {
	console.log(`Connected to ${rcon.ws.ip}:${rcon.ws.port}`);

	// Message, Name, Identifier.
	rcon.send('serverinfo', 'Artful', 10);

	setTimeout(() => {
		rcon.destroy();
	}, 5000);
});

rcon.on('error', err => {
	console.error(err);
});

rcon.on('disconnect', () => {
	console.log('Disconnected from RCON websocket');
});

rcon.on('message', message => {
	console.log(message);
});
