const webpack = require('webpack');

module.exports = {
    mode: 'development',
    target: 'web',
    entry: "./in.jsx",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: [/node_modules/, /public/]
            }
        ]
    },
    resolve: {
        fallback: {
            path: require.resolve("path-browserify"),
        },
    },
};

