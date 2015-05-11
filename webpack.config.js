var Webpack = require('webpack'),
    path = require('path'),
    nodeModulesPath = path.resolve(__dirname, 'node_modules'),
    srcPath = path.resolve(__dirname, 'src', 'app', 'app.js'),
    distPath = path.resolve(__dirname, 'src'),
    JSX_WITH_HOT_LOADERS = ['react-hot-loader', 'babel-loader'],
    CSS_LOADER = 'style-loader!css-loader',
    SASS_LOADER = CSS_LOADER + '!sass-loader',
    config;


config = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        srcPath
    ],
    output: {
        path: distPath,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js(x?)$/,
            exclude: [nodeModulesPath],
            loaders: JSX_WITH_HOT_LOADERS
        }, {
            test: /\.css$/,
            loader: CSS_LOADER
        }, {
            test: /\.scss$/,
            loader: SASS_LOADER
        }]
    }
};

module.exports = config;
