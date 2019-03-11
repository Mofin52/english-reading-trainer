var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var autoprefixer = require("autoprefixer");
var webpack = require("webpack");

module.exports = {
    entry: './src/index.js',
    context: __dirname,
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
              })
            },
			{
				test: /\.css$/,
				use: [
					'style-loader',
                    "css-loader",
                    "postcss-loader"
				]
			},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new ExtractTextPlugin('css/style.css'),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        })

    ],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        contentBase: './dist'
    }
}