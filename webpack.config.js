var webpack = require('webpack');

var config = {
	context: __dirname + '/app',
	entry: './core/index.js',
	output:{
		path: __dirname + '/app',
		filename: './bundle.js'
	},
	plugins: [
		new webpack.DefinePlugin({
			ON_TEST: process.env.NODE_ENV === 'test'
		})
	],
	module: {
		loaders:[
			{
				test: /\.js$/,
				exclude: /node_modules/,
				/**
				 * [
				 * annotate angular files.
				 * ng-annotate-loder is a valid reference too
				 * ]
				 * @type {String}
				 */
				loader: 'ng-annotate'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				/**
				 * [
				 * es6 tranpile with babel.
				 * babel-loder is a valid reference too
				 * ]
				 * @type {String}
				 */
				loader: 'babel'
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				/**
				 * [
				 * let webpack recognize html files.
				 * raw-loder is a valid reference too
				 * ]
				 * @type {String}
				 */
				loader: 'raw',
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				/**
				 * [
				 * let webpack recognize css files.style-loder or css loader 
				 * is a valid reference too
				 * loader are read by webpack from left to right
				 * so first css(to read the css and make it understandable)
				 * and after style to add the script tag 
				 * ]
				 * @type {String}
				 */
				loader: 'style!css',
			},
			{ 
				test: /\.styl$/,
				/**
				 * [
				 * let webpack recognize stylus files.style-loder or css loader 
				 * is a valid reference too
				 * loader are read by webpack from left to right
				 * so first css(to read the css and make it understandable)
				 * and after style to add the script tag 
				 * ]
				 * @type {String}
				 */
				loader: 'style!css!stylus'
			}
		]
	}
};

if (process.env.NODE_ENV === 'production') {
	config.output.path = __dirname + '/dist';
	config.plugins.push(new webpack.optimize.UglifyJsPlugin({compress:{ warnings: true },minimize: true}));
	config.devtool = 'source-map';
}
module.exports = config;