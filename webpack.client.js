const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js');

const config = {
    name: "browser",
    mode: "development",
    devtool: 'eval-source-map',
    entry: './client/main.js',

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },

}
// module.exports = config
module.exports = merge(baseConfig, config)