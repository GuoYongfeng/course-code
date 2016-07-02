var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  module: {
     loaders: [
       {
         test: /\.js$/,
         loader: 'babel'
       }
     ]
   }
}
