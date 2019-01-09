const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, options) => {
    const production = options.mode === 'production';

    return {
        entry: {
            main: './src/app/app.module.js',
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },

        devServer: {overlay: true},
        devtool: production ? false : 'eval-sourcemap',

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        compact: false,
                        plugins: ['angularjs-annotate'],
                    }
                },
                {
                    test: /\.html$/,
                    use: [{loader: 'html-loader', options: {minimize: true}}]
                },
                {
                    test: /\.(png|jpg|woff)$/,
                    loader: 'url-loader',
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    loaders: ['style-loader', 'css-loader']
                },
            ]
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new CopyWebpackPlugin([{from: 'src/assets', to: 'assets'}]),
            new HtmlWebPackPlugin({
                template: 'src/index.html',
            })
        ]
    }
};
