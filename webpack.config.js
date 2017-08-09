const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.join(__dirname, './src');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.ejs' }),
    new CopyWebpackPlugin([{ from: './assets', to: './public/assets' }]),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules/'),
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [srcPath],
            },
          },
        ],
      },
      {
        test: /\.jpg$/,
        use: 'file-loader',
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
  },
};
