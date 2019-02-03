const path = require('path');
const GasPlugin = require("gas-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: false,
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ]    
  },
  plugins: [
    new GasPlugin(),
    new HtmlWebpackPlugin({
      filename: "./dialog.html",
      template: "./src/dialog.html"
    })
  ]
};
