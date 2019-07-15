const path = require("path");

const plugins = require('./webpack-utils/plugins')
const loaders = require('./webpack-utils/loaders');

const webpackOption = {
    mode: 'production',
    entry: {
        backdrop: './src/components/backdrop/backdrop.tsx',
        header: './src/components/header/header.tsx',
        input: './src/components/input/input.tsx',
        layout: './src/components/layout/layout.tsx',
        menuIcon: './src/components/menuIcon/menuIcon.tsx',
        navigationItem: './src/components/navigationItem/navigationItem.tsx',
        navigationItems: './src/components/navigationItems/navigationItems.tsx',
        sideDrawer: './src/components/sideDrawer/sideDrawer.tsx',
        toolbar: './src/components/toolbar/toolbar.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'components/[name]/[name].js',
    },
    optimization: {
        // minimizer: plugins.uglifyJsPlugin
    },
    module: {
        rules: [
            loaders.babel,
            loaders.typescript,
            loaders.css,
            loaders.scss,
            loaders.file
        ],
    },
    plugins: [
        plugins.cleanWebpackPlugin,
        plugins.htmlWebpackPlugin
    ],
    resolve: {
        alias: {
            'react': 'preact',
            'react-dom': 'preact'
        },
        extensions: [".ts", ".tsx", ".js"]
    }
};

module.exports = webpackOption;


