const path = require('path');
const nodeExternals = require('webpack-node-externals');
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: path.resolve(__dirname, '..', 'src', 'server', 'index.ts'),
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, '..', 'build', 'server')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, '..', 'src', 'server'),
        loader: 'ts-loader',
        // options: {
        //   transpileOnly: true // disable type-checker and run on fork plugin
        // }
      }
    ]
  },
  // plugins: [
  //   new ForkTsCheckerWebpackPlugin(), // run `tsc` on a separate thread
  // ],
  externalsPresets: { node: true },
  externals: [nodeExternals()]
};