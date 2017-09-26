var glob=require('glob');
var path=require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin=require('clean-webpack-plugin');
const DistDir=path.resolve('./dist');
const SrcDir=path.resolve('./src');
module.exports = {
    project:{
        srcDir:SrcDir,
        distDir:DistDir
    },
    webpack:{
        entry: (function(){
            var map = {};
            var entry_files = glob.sync(path.join(SrcDir,"*.js")).forEach(function(filepath){
                var filename = filepath.substring(filepath.lastIndexOf('\/') + 1, filepath.lastIndexOf('.'));
                map[filename] = filepath;
            })
            return map;
        })(),
        output: {
            path: DistDir,
            filename: 'js/[name].[hash:8].js',
            chunkFilename: 'js/[name].[hash:8].js',
        },
        devtool: false,
        watch: false,
        profile: true,
        cache: true,
        module: {
            loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.css$/,
                loader : ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!less-loader"
                })
            },{
                test: /\.vue$/,
                loader:'vue-loader'
            },{
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },{
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }]
        },
        resolve: {
            alias:{
            //    'jquery': path.resolve(__dirname, '../src/vendor/jquery2/jquery.js'),
            }
        },
        plugins:[
            new CleanWebpackPlugin(['*'],{
                root:DistDir,
                exclude:[".gitkeep"]
            }),
            //new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
            new webpack.optimize.ModuleConcatenationPlugin(),
            //抽出css
            new ExtractTextPlugin({
                filename:'css/[name]-[contenthash:8].css',
                allChunks: true,
            })
        ]
    }

}