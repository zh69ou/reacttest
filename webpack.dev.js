const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

module.exports = merge(common,{
	plugins:[
		new CleanWebpackPlugin(),
		new webpack.NamedModulesPlugin(),
	  new webpack.HotModuleReplacementPlugin()
	],
	mode:'development'
})