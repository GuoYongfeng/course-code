var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  devtool: 'source-map',
  module: {
     loaders: [
       {
         test: /\.js$/,
         loader: 'babel'
       },
       {
          test: /\.css/,
          loader: 'style!css'
       },
       {
          test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url"
      }
     ]
   },
   resolve: {
    extensions: ["", ".js", ".jsx", ".css", ".json"]
  }
}
