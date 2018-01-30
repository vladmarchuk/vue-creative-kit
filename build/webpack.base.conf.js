var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './src/main.js'
    ]
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /(^(?!.*svg-component).*\.svg$)|(\.(png|jpe?g|gif))(\?.*)?$/, // all image files and SVG's which are not in 'svg-component' folder.
        loaders: [
          'url-loader?limit=15000,name=' + utils.assetsPath("img/[name].[hash:7].[ext]"),
          'image-webpack-loader?{'
          + 'optipng: { optimizationLevel: 1 },'
          + 'gifsicle: { interlaced: false },'
          + 'mozjpeg: { quality: 75 }'
          + '}'
        ],
      },
      {
        test: /((.*svg-component).*\.svg$)(\?.*)?$/, // SVG's which are in 'svg-component' folder - resolves and modules.
        loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
};
