const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    filename: './src/main.js',
  },
  output: {
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['es2015', { modules: false }]],
          },
        },
      },
    ],
  },
};
