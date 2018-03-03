const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const base_config = require('./webpack.base.js');
const webpack_node_externals = require('webpack-node-externals')


const config = {

    target: 'node',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],

    entry: './src/index.js',

   output: {
       filename: 'bundle.js',
       path: path.resolve(__dirname , 'build')
   },
   externals:[webpack_node_externals()]
   
};

module.exports = merge(base_config, config)