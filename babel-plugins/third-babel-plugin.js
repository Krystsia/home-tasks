module.exports = function() {
	const myPlugin = require('./decorator-plugin/index.js');
	const babylon  = require('babylon');
	let func = 'function(n){return n * 4;}';
	let options = {
		plugins: [myPlugin]
	};
	let ast = babylon.parse('(n) => n',options);
	console.log(ast);
	return {
		
	}
}