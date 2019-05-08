var webpack = require("webpack"),
    path = require('path'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname + '/assets'),
    entry: {
        app: ['./app.js']
    },
    output: {
        path: path.resolve(__dirname + '/assets/dist'),
        publicPath: '/assets/dist',
        filename: '[name].js'
    },
    resolve: {
        modulesDirectories: [
            "./assets/js",'node_modules'
        ],
        extentions: ['', '.js', '.min.js', '.scss'],
        alias: {
            styles: path.resolve(__dirname + '/assets')
        }
    },
    devtool: '#cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname + '/assets')
        })
    ],
    devServer: {
        host: 'localhost',
        port: 8080
    }
};
