const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const ExtractCSS = new ExtractTextPlugin('/public/css/style.css');

module.exports = {
	mode: 'production',
	context: __dirname + '/app',
	entry: {
		app: './app.js',
		vendor: [
			'angular',
			'angular-animate',
			'angular-route',
			'angular-ui-bootstrap'
			]
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].bundle.js'
	},
	resolve: {
		extensions: ['.js']
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /angular/,
					name: 'vendor',
					chunks: 'all'
				}
			}
		}
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
					use: [{ 
						loader: 'css-loader', 
						options: { 
							minimize: true 
						} 
					}]
				})
			},
			{
				test: /\.(jpg|jpeg|gif|png)$/,
				use: [
				{ 	loader: 'url-loader',
					options: {
						limit: 2000,
						outputPath: '/public/images/',
						name: '[name].[ext]'
					}
				}]
			},
		]
	},
	plugins: [
		ExtractCSS,
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		})
	]
};
