const path = require('path');

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'node.js',
  },
  module: {
    rules: [{ test: /^(?!.*\.spec\.ts$).*\.ts$/, use: 'ts-loader' }],
  },
  resolve: {
    alias: {},
    extensions: ['.js', '.ts'],
  },
};

const clientConfig = {
  target: 'web',
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'web.js',
  },
  module: {
    rules: [{ test: /^(?!.*\.spec\.ts$).*\.ts$/, use: 'ts-loader' }],
  },
  resolve: {
    alias: {},
    extensions: ['.js', '.ts'],
  },
};

module.exports = [serverConfig, clientConfig];
