import axios from 'axios';

window.axios = axios;

const apiConfig = {
	localhost: {
		url: ''
	},
	'test环境url': {
		url: ''
	},
	'demo环境url': {
		url: ''
	},
	'生产环境url': {
		url: ''
	}
};

const ENV = apiConfig[window.location.host];

export default {
	install(Vue) {

	}
};
