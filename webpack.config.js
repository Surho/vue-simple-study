const { join } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { HotModuleReplacementPlugin } = require('webpack');

// let mode = 'development';
// let target = 'web';
//
// if(process.env.NODE_ENV === 'production') {
//     mode = 'production';
//     target = 'browserslist';
// }

module.exports = {
    mode: 'development',
    // target,
    entry: join(__dirname, 'src', 'index.js'),
    output: {
        path: join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env"],
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ]
            }
            // {
            //     test: /\.scss$/i,
            //     use: [
            //         {
            //             loader: MiniCssExtractPlugin.loader,
            //             options: {
            //                 esModule: false,
            //             },
            //         },
            //         "css-loader",
            //         "postcss-loader",
            //         "sass-loader"
            //     ]
            // },
        ]
    },

    // resolve: {
    //     alias: {
    //         'vue$': 'vue/dist/vue.esm.js',
    //     },
    //     extensions: ['*', '.js', '.vue', '.json']
    // },

    plugins: [
        new MiniCssExtractPlugin(),
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            showErrors: true,
            inject: true,
            cache: true,
            title: 'vue-study-project',
            template: join(__dirname, 'index.html'),
        })
    ],

    // devtool: 'source-map',
    devServer: {
        port: 1000,
        hot: true,
        open: true,
        historyApiFallback: true,
    }
};
