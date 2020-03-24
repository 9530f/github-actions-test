const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/app.js',
    devtool: 'source-map',

    output: {
        path:  path.resolve(__dirname, 'dist'),
        filename: 'js/[contenthash:8].bundle.js',
        publicPath: '/'
    },

    optimization: {
        minimize: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        })
    ]
};
