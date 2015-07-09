var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../app/main.js'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.scss$/, loader: 'style!css!sass?sourceMap' }
    ]
  }
};
