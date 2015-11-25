var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'style!css' // Run both loaders
    }, {
      test   : /\.woff|\.woff2|\.svg|.eot|\.ttf/,
      exclude: /node_modules/,
      loader : 'url?prefix=font/&limit=10000'
    }, {
      test   : /\.json?$/,
      exclude: /node_modules/,
      loader : 'json'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'css']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
