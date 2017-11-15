const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
	context: __dirname + '/app',
	entry: {
		app: './app.js',
		vendor: [
			'angular',
			'angular-animate',
			'angular-route',
			'angular-ui-bootstrap',
			'jquery'
			]
	},
	output: {
		path: __dirname + '/dist',
		filename: 'app.bundle.js'
	},
	resolve: {
		extensions: ['.js']
	},
	module: {
		rules: [
			{
				test: /\.js/,
				use: [
				{ loader: 'ng-annotate-loader' },
				{ loader: 'babel-loader',
					options: { presets: ['env'] }
				}]
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.css$/, 
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader']
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('../public/css/style.css'),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor', 
			filename: 'vendor.bundle.js',
			minChunks: Infinity
		})
	]
};
