const http = require('http');
const URL = require('url');


const request = async (url, data) => {
	return new Promise((fulfill, reject) => {
		const formData = JSON.stringify(data, function(a, b) {
			return "string" === typeof b ? encodeURIComponent(b) : b;
		});

		const urlObj = URL.parse(url);
		const options = {
			...urlObj,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
				'Content-Length': formData.length,
				'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36',
				'X-Requested-With': 'XMLHttpRequest',
			},
		};
		// console.log('url: ', options);

		const req = http.request(options, (resp) => {
			// console.log('status: ', resp.statusCode);
			// console.log('resp headers: ', resp.headers);
			let str = '';
			resp.on('data', (chunk) => str += chunk);

			resp.on('end', () => {
				// console.log('data: ', str);
				fulfill(JSON.parse(str));
			});
		}).on('error', reject);

		req.write(formData);
		// console.log('formData: ', formData);
		req.end();
	});
}

const load = async (url) => {
	return new Promise((fulfill, reject) => {
		const urlObj = URL.parse(url);
		const options = {
			...urlObj,
			method: 'GET',
			headers: {
				'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36',
				'X-Requested-With': 'XMLHttpRequest',
			},
		};
		// console.log('url: ', options);

		const req = http.request(options, (resp) => {
			// console.log('status: ', resp.statusCode);
			// console.log('resp headers: ', resp.headers);
			let str = '';
			resp.on('data', (chunk) => str += chunk);

			resp.on('end', () => {
				// console.log('data: ', str);
				fulfill(JSON.parse(str));
			});
		}).end().on('error', reject);
	});
}

exports.request = request;
exports.load = load;