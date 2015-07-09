//module.exports = {
//  entry: './entry.js',
//  output: {
//    path: __dirname,
//    filename: 'bundle.js'
//  },
//  module: {
//    loaders: [
//      { test: /\.css$/, loader: 'style!css' },
//      { test: /\.scss$/, loader: 'style!css!sass?sourceMap' }
//    ]
//  }
//};

//var path = require('path');
//
//module.exports = {
//  entry: path.resolve(__dirname, '../app/main.js'),
//  output: {
//    path: path.resolve(__dirname, '../../static/js'),
//    filename: 'bundle.js',
//  },
//  module: {
//    loaders: [
//      { test: /\.scss$/, loader: 'style!css!sass' },
//      { test: /\.html$/, loader: 'ejs' }
//    ]
//  }
//};

var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'entry.js'),
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass?sourceMap' }
    ]
  }
};
