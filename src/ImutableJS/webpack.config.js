var webpack = require('webpack')
var path = require("path");

module.exports = {
    entry: {
        js: './index.js'
    },
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader', //在webpack的module部分的loaders里进行配置即可
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devServer: {
        contentBase: './',
        hot: true
    }
}