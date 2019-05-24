const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main-[hash].js'
  },
  devServer: {
    // hot: true,
    // inline: true,
    // open: true,
    // port: 3000,
    contentBase: './src'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style-[hash].css'
    }),
    new HtmlWebpackPlugin({
      filename: 'task-1.html',
      template: './src/html/task-1.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'task-2.html',
      template: './src/html/task-2.html'
    })
  ]
};
