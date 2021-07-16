const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/client/scripts/game.ts', './webpack/credits.js'],
  target: 'web',
  output: {
    path: path.resolve(__dirname, '..', 'build', 'client'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.tsx?$|\.jsx?$/,
      include: path.join(__dirname, '..', 'src', 'client'),
      loader: 'ts-loader'
    }]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          filename: '[name].bundle.js'
        }
      }
    }
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      gameName: 'Multiplayer Snake Game',
      template: 'src/client/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/client/assets', to: 'assets' },
        { from: 'pwa', to: '' },
        { from: 'src/client/favicon.ico', to: '' }
      ]
    }),
    new InjectManifest({
      swSrc: path.resolve(__dirname, '..', 'pwa', 'sw.js'),
      swDest: 'sw.js'
    })
  ]
}
