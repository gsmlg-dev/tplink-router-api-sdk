const { Router } = require('./lib/index');

const host = '10.100.10.1';

const run = async () => {
	const r = new Router({ address: host, password: process.env.passwd });

    await r.getPublicKey();

	await r.login();

	const status = await r.wanStatus();
	console.log(status)
};

run();

