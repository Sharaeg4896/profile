const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const APP_DIR = path.resolve(__dirname, 'src');


module.exports = {
    mode: 'development',
    devServer: {
        contentBase: './dist',
        port: 3030
    },
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.scss$/,
                use:['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'html webpack plugin',
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}