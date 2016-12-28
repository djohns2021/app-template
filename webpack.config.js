const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  debug: true,
  entry: [
    './app/src/main.js'
  ],
  output: {
      path: __dirname,
      filename: './build/bundle.js'
  },
  resolve: {
    root: [
      path.join(__dirname, 'app/src')
    ],
    fallback: [
      path.join(__dirname, '/node_modules')
    ],
    alias: {
      'styles': path.join(__dirname, 'app/styles'),
      'src': path.join(__dirname, 'app/src')
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
            presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        include: [
          path.join(__dirname, 'app/styles')
        ],
        loader: 'style!css?modules&importLoaders=1&localIdentName=[path][name]---[local]---[hash:base64:5]!postcss!sass'
      },
      {
        test: /(\.scss|\.css)$/,
        exclude: [
          path.join(__dirname, 'app/styles')
        ],
        loader: 'style!css!postcss!sass'
      }
    ]
  }
};
