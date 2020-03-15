const { resolve } = require('path');

module.exports = {
  output: {
    filename: 'bundle_[hash].js',
    path: resolve(__dirname, '../build'),
    publicPath: '/'
  },
  context: resolve(__dirname, '../src'),
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.scss',
      '.css',
      '.png',
      '.mp4',
      '.jpg',
      '.svg',
      '.pdf',
      '.zip'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      images: resolve(__dirname, '../src/images'),
      styles: resolve(__dirname, '../src/styles'),
      javascripts: resolve(__dirname, '../src/javascripts')
    }
  }
};
