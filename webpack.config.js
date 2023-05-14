const path = require('path');

const indexConfig = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'index',
    libraryTarget: 'umd',
    globalObject: 'this',
    clean: true,
  },
  module: {
    rules: [{ test: /^(?!.*\.spec\.ts$).*\.ts$/, use: 'ts-loader' }],
  },
  resolve: {
    alias: {},
    extensions: ['.js', '.ts'],
  },
};

module.exports = [indexConfig];
