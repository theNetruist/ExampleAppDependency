const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: { run: './src/app.tsx', package: './src/index.tsx' },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        // host: '0.0.0.0',
        static: './local',
        port: 1337,
        historyApiFallback: {
            index: '/',
        },
        server: {
            type: 'http',
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            // favicon: 'public/favicon.ico',
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle/[name].js',
        path: path.resolve(__dirname, 'local'),
    },
};
