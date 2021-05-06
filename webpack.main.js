/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	devtool: 'source-map',
	entry: path.resolve(__dirname, 'src', 'main', 'index.ts'),
	target: 'electron-main',
	module: {
		rules: [
			{
				test: /\.(js|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	node: {
		__dirname: false,
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
}
