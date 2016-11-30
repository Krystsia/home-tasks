const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || "development";
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSCSS = new ExtractTextPlugin('style.css');
const extractJSON = new ExtractTextPlugin('data.json');

module.exports = {
    context: path.resolve(__dirname, "app"),
    entry: {
        "bbc": "./last-news/index.js",
        "ng": "./national-geographic-news/index.js",
    },
    
    output: {
        path: __dirname + "/public",
        publicPath: './',
        filename: "[name].js",
        library: "[name]"
    },
    
    watch: NODE_ENV == "development",
    
    watchOptions: {
        aggregateTimeout: 100
    },
    
    devtool: NODE_ENV == "development" ? "cheap-module-source-map" : null,
    
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },
    
    resolveLoader: {
        modulesDirectories: ['node_modules','my_loaders'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },
    
    plugins: [
        new webpack.NoErrorsPlugin(),
        
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common"
        }),
        new webpack.NoErrorsPlugin(),

        extractSCSS,
        extractJSON
    ],
    
    
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: "babel"
            },
            
            {
                test: /\.scss$/,
                loader: extractSCSS.extract("style", "css?minimize!postcss!sass?sourceMap")
            },

            {
                test: /\.json$/,
                loaders: ["json", 'my']
            }
        ]
    },
	
	devServer: {
		port: 8080,
		contentBase: __dirname + '/public',
        hot: true
    },
    debug: true
};