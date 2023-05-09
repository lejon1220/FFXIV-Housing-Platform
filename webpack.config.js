const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
	'./client/index.js'
  ],
  output: {
	path: path.resolve(__dirname, 'dist'),
	publicPath: path.resolve('/dist'),
	filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
			test: /\.jsx?/,
			exclude: /(node_modules)/,
			use: {
			 loader: 'babel-loader',
			 options: {
				presets: ['@babel/preset-env', '@babel/preset-react' ]
			 },
			}
		  },
		  {
			test: /\.s[ac]ss$/i,
			use: [
				"style-loader",
				"css-loader",
				"sass-loader",
			  ]
		  }		
	  ]
  },
	plugins: [new HtmlWebpackPlugin()],
  devServer: {
    static: {
			directory: path.join(__dirname, '/client'),
    },
    proxy: {
      '/api' : 'http://localhost:3000'
    },
    compress: true,
    port: 8080,
  }
}