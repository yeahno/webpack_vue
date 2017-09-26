var merge = require('webpack-merge');
var path=require('path');
var common = require('./webpack.common.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack=require('webpack');

module.exports = merge(common.webpack, {
    devtool: "eval",
    //watch:true,
    devServer: {
        contentBase: common.project.distDir,
        port: 8080,
        //hot:true,
        //inline:true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: path.join(common.project.srcDir,"index.html"),
            inject: true
        })
    ]
})