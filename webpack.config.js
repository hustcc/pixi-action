'use strict';

var webpack = require('webpack');
var PLUGIN_NAME = require('./package.json').name;
var DEV = process.env.NODE_ENV !== "production";
var ENTRY = ['./src/index.js'];
var EXTERNALS = {'pixi.js': 'PIXI'};

var UG = new webpack.optimize.UglifyJsPlugin({
  output: {comments: false},
  compress: {warnings: false}
})

module.exports = {
  devtool: 'source-map',
  entry: ENTRY,
  output: {
    filename: 'build/' + PLUGIN_NAME + '.js'
  },
  externals : EXTERNALS,
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=stage-0'
    }]
  },
  plugins: [UG]
};