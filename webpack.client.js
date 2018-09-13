const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const base_config = require('./webpack.base.js')


VENDOR_LIBS = [
    'react', 'lodash', 'redux', 'react-redux', 'react-dom', 
]

const config = {

    target: 'node',
    plugins: [
        new webpack.DefinePlugin({ "process.env": { NODE_ENV: JSON.stringify("production"),
        REACT_APP_STRIPE_KEY:JSON.stringify("pk_test_j4Ru6YMa8zr45019QQG3FRv0") } }),
    ],


    entry: {
        bundle: './src/client/client.js',
        //vendor: VENDOR_LIBS
    },


   output: {
       filename: '[name].js',
       path: path.resolve(__dirname , 'public')
   }
    
   
}

module.exports = merge(base_config, config)