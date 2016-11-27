const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
    context: __dirname + "/app",
    entry: {
        "bbc": "./last-news/index.js",
        "ng": "./national-geographic-news/index.js"
    },
    
    output: {
        path: __dirname + "/public",
        publicPath: '/',
        filename: "[name].js",
        library: "[name]"
    },
    
    watch: NODE_ENV == "development",
    
    watchOptions: {
        aggregateTimeout: 100
    },
    
    devtool: NODE_ENV == "development" ? "cheap-module-source-map" : null,
    
    resolve: {
        moduleDirectories: ['node_modules'],
        extensions: ['', '.js']
    },
    
    resolveLoader: {
        moduleDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },
    
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common"
        })
    ],
    
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                query: {
                    "presets": [
                        "es2015",
                        "stage-3",
                        "es2015-ie"
                    ],
                    "plugins": [
                        "./babel-plugins/first-babel-plugin.js",
                        "babel-plugin-transform-es2015-modules-commonjs"

                    ]
                }
            },
            
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
};