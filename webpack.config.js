const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');

let mode = 'development';
let target = 'web';

if(process.env.NODE_ENV === 'production') {
    mode = 'production';
    target = 'browserslist';
}

module.exports = {
    mode,
    target,
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader',
                        scss: [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader',
                        ]
                    },
                },
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
        ]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
        extensions: ['*', '.js', '.vue', '.json']
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new VueLoaderPlugin(),
    ],

    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
    }
};
