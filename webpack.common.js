const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
entry: './src/app/index.ts',
module:{
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader',
            ]
        }
    ]
},
plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({title:"Production"})
],
resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
},
output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
},
};