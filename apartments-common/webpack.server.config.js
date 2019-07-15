var path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const loaders = require('./webpack-utils/loaders');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    module: {
        rules: [
            loaders.babel,
            loaders.typescript,
            loaders.scss,
            loaders.file
        ]
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin(
            { template: path.join(__dirname, '/public/index.html') }
        )
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};