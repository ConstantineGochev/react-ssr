const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const base_config = require('./webpack.base.js')


const config = {

    target: 'node',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],

    entry: './src/client/client.js',

   output: {
       filename: 'bundle.js',
       path: path.resolve(__dirname , 'public')
   }
   
}

module.exports = merge(base_config, config)