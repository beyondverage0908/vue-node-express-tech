const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV === 'development' ? true : false;

console.log(`current env is dev ${isDev}`);

const config = {
  target: 'web',
  entry: {
    index: path.join(__dirname + '/src/index.js')
  },
  output: {
    filename: '[name].boundle.js',
    path: path.join(__dirname + '/dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name]-[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin()
  ]
}

if (isDev) {
  config.mode = 'development';
  config.devtool = '#cheap-module-eval-source-map';
  config.devServer = {
    contentBase: path.join(__dirname, 'dist'),
    port: 8999,
    compress: true,
    overlay: {
      errors: true
    },
    open: true,
	hot: true,
	// proxy: {
	// 	'/api': 'http://localhost:3000',
	// 	changeOrigin: true
	// }
  };
  config.plugins.push(
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoEmitOnErrorsPlugin()
  )
} else {
  config.mode = 'production';
}

module.exports = config;