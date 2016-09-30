const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const precss = require('precss');
const cssnext = require('postcss-cssnext');
const paths = require('./paths');
const babelConfig = require('./babel.dev');


module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client',
    'webpack/hot/dev-server',
    `${paths.srcDir}/index.js`
  ],
  resolve: {
    extensions: ['', '.js', '.json'],
    alias: {
      src: paths.srcDir // this allows import 'src/Component'
    }
  },
  output: {
    path: paths.buildDir,
    // In development, we always serve from the root. This makes config easier.
    publicPath: '/',
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true,
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      include: paths.srcDir,
      loader: 'eslint'
    }],
    loaders: [{
      test: /\.js$/,
      include: paths.srcDir,
      loader: 'babel',
      query: babelConfig
    }, {
      test: /\.css$/,
      include: paths.srcDir,
      loader: 'style!css!postcss'
    }, {
      test: /\.json$/,
      include: paths.srcDir,
      loader: 'json'
    }, {
      test: /\.(eot|otf|ttf|woff|woff2)(\?.*)?$/,
      include: paths.srcDir,
      loader: 'file',
      query: {
        name: 'fonts/[name].[hash:8].[ext]'
      }
    }, {
      test: /\.(jpg|jpeg|png|gif|svg|ico|webp)(\?.*)?$/,
      include: paths.srcDir,
      loader: 'file',
      query: {
        name: 'media/[name].[hash:8].[ext]'
      }
    }, {
      test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
      include: paths.srcDir,
      loader: 'url',
      query: {
        limit: 10000,
        name: 'media/[name].[hash:8].[ext]'
      }
    }]
  },
  postcss() {
    return [precss, cssnext({
      browsers: [
        '>1%',
        'last 2 versions',
        'Firefox ESR',
        'not ie < 9'
      ]
    })];
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: `${paths.publicDir}/index.html`,
      favicon: `${paths.publicDir}/favicon.ico`
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin()
  ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};