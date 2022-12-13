const { 
	serverRconStartFN,
	rconCommand 
} = require('./src/index.js');


serverRconStartFN(null, '45.88.230.41', '27416', 'plebdev69')
	.then(state => {
		if(state) {
			console.log('server connection successed')
			rconCommand('serverinfo', 'Artful', 10)
				.then(result => {
					console.log(result)
				})
		} else {
			console.log('server connection failed')
		}
	})
	.catch(err => console.log(err))