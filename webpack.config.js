var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
      'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
      'webpack/hot/dev-server', // "only" prevents reload on syntax errors
      './src/main.js'
  ],
  output: {
      path: __dirname +'/dist/',
      filename: 'bundle.js',
      publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin("[name].css", {
        allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: "./src"
  }
};
