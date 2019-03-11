var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'sass-loader',
                ]
              })
            },
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
				]
			},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new ExtractTextPlugin('css/style.css')

    ],
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css']
    },
    devServer: {
        contentBase: './dist'
    }
}