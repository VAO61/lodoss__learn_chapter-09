const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, ...argv) => {
  const isProduction = argv[0].mode === 'production';

  return {
    entry: {
      'task-1': './src/task-1.js',
      'task-2': './src/task-2.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js?[hash]'
    },
    devtool: isProduction ? 'none' : 'inline-source-map',
    devServer: {
      hot: true,
      inline: true,
      open: true
      // contentBase: './src'
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
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.html$/,
          use: ['html-loader']
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css?[hash]'
      }),
      new HtmlWebpackPlugin({
        filename: 'task-1.html',
        template: './src/html/task-1.html',
        chunks: ['task-1']
      }),
      new HtmlWebpackPlugin({
        filename: 'task-2.html',
        template: './src/html/task-2.html',
        chunks: ['task-2']
      })
    ]
  };
};
