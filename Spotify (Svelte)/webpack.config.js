const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
	entry: {
		'build/main': ['./src/main.js']
	},
	output: {
		path: path.join(__dirname, '/public'),
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						compilerOptions: {
							dev: !prod
						},
						emitCss: prod,
						hotReload: !prod
					}
				}
			},
		]
	},
	mode: 'development',
	plugins: [
	],
};