const NODE_ENV = process.env.NODE_ENV || 'development'
const [isDevelopment] = [NODE_ENV == 'development']

const root = process.cwd()
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const pathConfig = {
  root: root,
  static: path.resolve(root, 'static')
}

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: '../src/index.js',
  output: {
    filename: isDevelopment ? 'js/[name].js' : 'js/[name].[contenthash].js',
    path: pathConfig.static,
    publicPath: '/static/'
  },
  resolve: {
    alias: {
      '@src': path.resolve(root, 'src')
    },
    extensions: ['.js'],
    mainFiles: ['index', 'main']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.buildTime': JSON.stringify(Date.now())
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: isDevelopment ? 'development' : 'production'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'template.ejs'),
      chunks: ['main'],
      title: 'Test',
      inject: 'body'
    })
  ]
}
