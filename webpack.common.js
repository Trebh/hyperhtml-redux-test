const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  context: __dirname,
  entry: './src/app/app.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader', 'eslint-loader',
        ],
      },
      {
        test: /index\.html/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'index.html',
          },
        },
      },
    ],
  },
};
