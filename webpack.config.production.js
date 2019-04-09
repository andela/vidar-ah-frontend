const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ],
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.s?css/,
  //       use: [
  //         MiniCssExtractPlugin.loader,
  //         'css-loader',
  //         'sass-loader'
  //       ]
  //     }
  //   ]
  // },
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: './css/[name].css'
  //   })
  // ],
};
