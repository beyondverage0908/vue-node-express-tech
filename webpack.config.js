const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const isDev = process.env.NODE_ENV === 'development' ? true : false;

console.log(process.env.NODE_ENV, isDev);

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
    new VueLoaderPlugin()
  ]
}

if (isDev) {
  config.mode = 'development';
} else {
  config.mode = 'production';
}


module.exports = config;