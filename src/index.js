const Client = require('./client/client');

let client = null;
let err = null;
// let promise = 
function serverRconStartFN(serverid=null, ip, port, password) {
	return new Promise(function(resolve, reject) {
		err = null;
		client = new Client({
			ip: ip,
			port: port,
			password: password
		});

		client.login();

		client.on('connected', () => {
			// console.log(`Connected to server`)
			resolve(true)
		})

		client.on('error', err => {
			resolve(false)
		})

		client.on('disconnect', () => {
			// console.log('Disconnected from client websocket');
		});
	})
}

function rconCommand(serverid, command, identifier) {
	client.send(serverid, command, identifier);
	return new Promise(function(resolve, reject) {
		client.on('message', message => {
			if(message) {
				resolve({
					state: 1,
					response: message
				}) 
			}
		});
	})
}

module.exports = {
	serverRconStartFN,
	rconCommand
}