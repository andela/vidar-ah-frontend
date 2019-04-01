const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: `${__dirname}/dist`,
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s?css/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },

      {
        test: /\.(gif|png|jpe?g|woff|woff2|eot|ttf|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              mozjpeg: {
                progressive: true,
                quality: 65
              },
            },
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.scss']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })

  ],
};
