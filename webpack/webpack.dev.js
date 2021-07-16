const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

const dev = {
  mode: 'development',
  devtool: 'eval-source-map',
}

module.exports = merge(common, dev);
