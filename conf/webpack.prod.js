var path=require('path');
var merge = require('webpack-merge');
var common = require('./webpack.common.js');
var webpack=require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common.webpack, {
    plugins: [
        //vue
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                drop_console: true,
                drop_debugger: true,
                warnings: false
            },
            output: {
                comments: false,
            }
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: {removeAll: true}
            },
            canPrint: true
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: path.join(common.project.srcDir,"index.html"),
            inject: true,
            minify: {
                collapseWhitespace: true
            },
        })
    ]
});