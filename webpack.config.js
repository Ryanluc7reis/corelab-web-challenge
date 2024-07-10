const path = require('path')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[bundle.js].[contenthash].js',
    chunkFilename: '[bundle.js].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, './.env')
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CompressionPlugin({
      algorithm: 'gzip'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false
    },
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  performance: {
    maxAssetSize: 300000,
    maxEntrypointSize: 300000
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 3000,
    hot: true
  }
}
