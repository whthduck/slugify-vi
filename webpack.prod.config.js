const path = require('path');

const serverConfig = {
  target: 'node',
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.node.js',
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader' }],
  },
  resolve: {
    alias: {},
    extensions: ['.js', '.ts'],
  },
};

const clientConfig = {
  target: 'web',
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js',
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader' }],
  },
  resolve: {
    alias: {},
    extensions: ['.js', '.ts'],
  },
};

module.exports = [serverConfig, clientConfig];