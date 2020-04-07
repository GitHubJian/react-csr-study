const root = process.cwd()

const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const webpackConfig = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    host: '0.0.0.0',
    contentBase: root,
    compress: false,
    port: 8419,
    hot: true,
    inline: true
  }
}

module.exports = webpackMerge({}, baseConfig, webpackConfig)
