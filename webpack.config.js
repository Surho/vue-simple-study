const { join } = require('path');
const path = require('path');
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

const PATHS = {
  images: path.resolve(__dirname, 'src/assets/img'),
};

module.exports = {
    mode: 'development',
    // target,
    entry: join(__dirname, 'src', 'index.js'),
    output: {
        path: join(__dirname, 'build'),
        filename: 'js/bundle.js',
         assetModuleFilename: 'images/[hash][ext]',
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
            },
            {
                test: /\.scss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /(\.jpg|\.png|\.ico|.gif|\.tif|\.svg|\.webp)\??.*$/,
                type: 'asset/resource'
            },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/,
            //     loader: ''
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
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            showErrors: true,
            inject: true,
            cache: true,
            title: 'vue-study-project',
            template: join(__dirname, 'src', 'index-template.html'),
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
