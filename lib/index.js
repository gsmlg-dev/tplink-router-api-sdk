const crypto = require("crypto");
const JSEncrypt = require('node-jsencrypt');
const http = require('http');

const { request: req, load } = require('./request');

class Router {

	options = { address: 'tplogin.cn', password: '', pubkey: '' };

	getPublicKey() {
		return load(`http://${this.options.address}/pc/Content.htm`).then(({ data }) => {
			return this.set({ pubkey: data.key });
		});
	}

	constructor({ address = 'tplogin.cn', password = '' }) {
		this.options = { address, password };
	}

	set(options = {}) {
		this.options = { ...this.options, ...options };
		return this;
	}

	get(name) {
		return this.options[name];
	}

	login() {
		const password = this.get('password');
		const epasswd = this.encrypt(password);
		const data = {
			"method": "do",
			"login": {
				"password": epasswd,
				"encrypt_type": 1
			}
		}
		const address = this.get('address');
		return req(`http://${address}`, data).then(({ stok }) => {
			this.set({ stok });
		});
	}

	wanStatus() {
		const data = {
		  "network": {
		    "name": [
		      "wan_status"
		    ]
		  },
		  "method": "get"
		};
		return req(`http://${this.get('address')}/stok=${encodeURIComponent(this.get('stok'))}/ds`, data).then(({ network }) => {
			return network.wan_status;
		})
	}


	encrypt(toEncrypt) {
		const jse = new JSEncrypt()
	  	const publicKey = `${this.get('pubkey')}`;
		// console.log(publicKey);
        // const publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCoVBwJv2pBtrr9ZY9C4lgqNo5+dFI+3A6W80h+8CzpCxsgl8Dic7JYmcTfOrtYtYJ6Vma3ZWx+NK1bJk8DFipOnDewVVJ6wmucnryF3OlfcIjLZsYjh4Sq2mdZfg0lOThTvh8z4V2jO6fWh91iwOOeCokGoMw9V+QyQevtCr5pSQIDAQAB"
		jse.setPublicKey(publicKey);


	  	const securityEncode = (a, b, d) => {
            var c = "", e, g, h, m, p = 187, q = 187;
            g = a.length;
            h = b.length;
            m = d.length;
            e = g > h ? g : h;
            for (var k = 0; k < e; k++) q = p = 187, k >= g ? q = b.charCodeAt(k) : k >= h ? p = a.charCodeAt(k) : (p = a.charCodeAt(k),
            q = b.charCodeAt(k)), c += d.charAt((p ^ q) % m);
            return c;
        };
        const orgAuthPwd = (a) => {
            return securityEncode("RDpbLfCPsJZ7fiv", a, "yLwVl0zKqws7LgKPRQ84Mdt708T1qQ3Ha7xv3H7NyU84p21BriUWBU43odz3iP4rBL3cD02KZciXTysVXiV8ngg6vL48rPJyAUw0HurW20xqxv9aYb4M9wK1Ae0wlro510qXeU07kV57fQMc8L6aLgMLwygtc0F10a0Dg70TOoouyFhdysuRMO51yY5ZlOZZLEal1h0t9YQW0Ko7oBwmCAHoic4HYbUyVeU3sfQ1xtXcPcf1aT303wAQhv66qzW");
        };
        const pwd = orgAuthPwd(toEncrypt);
        // console.log('pwd: ', pwd);

		const encrypted = jse.encrypt(pwd);
		return encrypted;
	}

}

exports.Router = Router;
