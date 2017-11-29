const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const ExtractCSS = new ExtractTextPlugin('/public/css/style.css');

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
				use: ExtractCSS.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.css$/, 
				use: ExtractCSS.extract({
					fallback: 'style-loader',
					use: ['css-loader']
				})
			},
			{
				test: /\.(jpg|jpeg|gif|png)$/,
				use: [
				{ 	loader: 'url-loader',
					options: {
						limit: 8192,
						outputPath: '/public/images/',
						name: '[name].[ext]'
					}
				}]
			},
		]
	},
	plugins: [
		ExtractCSS,
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor', 
			filename: 'vendor.bundle.js',
			minChunks: Infinity
		})
	]
};
