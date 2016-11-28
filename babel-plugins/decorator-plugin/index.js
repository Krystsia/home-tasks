const { plugins } = require('babylon/lib/parser');
const { types: t } = require('babylon/lib/tokenizer/types');

const pluginName = 'decorators';

let plugin = (instance) => {
	instance.extend('parseFunctionBody', inner => function(node) {
		console.log('hell');
	});
}


plugins[pluginName] = plugin;

module.exports = () => function manipulateOptions(opts, parserOpts) {
	parserOpts.plugins.push(pluginName);
};
