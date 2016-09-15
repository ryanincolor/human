var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: [
        "webpack-dev-server/client?http://0.0.0.0:3000", /* WebpackDevServer host and port */
        "webpack/hot/only-dev-server", // "only" prevents reload on syntax errors
        "./app/index" // entry point of app
    ],
    output: {
        path: path.join(__dirname, "public"),
        publicPath: "/js/",
        filename: "bundle.js"
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin('styles.css')
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'app') 
            },
            { 
                test: /\.json$/, 
                loader: 'json' 
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            }, 
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }   
                   
            }
        ]
    }
}
