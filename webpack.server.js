const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const base_config = require('./webpack.base.js');
const webpack_node_externals = require('webpack-node-externals')
var fs = require('fs');


var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


const config = {

    target: 'node',
    plugins: [
       
        new webpack.DefinePlugin({ "process.env": { NODE_ENV: JSON.stringify("production"),
        REACT_APP_STRIPE_KEY:JSON.stringify("pk_test_j4Ru6YMa8zr45019QQG3FRv0") } }),
        new webpack.optimize.UglifyJsPlugin()

    ],

    entry: './src/index.js',

   output: {
       filename: 'bundle.js',
       path: path.resolve(__dirname , 'build')
   },
   externals:nodeModules,
   
};

module.exports = merge(base_config, config)