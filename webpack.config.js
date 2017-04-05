const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootDir = __dirname;

const paths = {
  entry: path.resolve(rootDir, 'src/index.jsx'),
  output: path.resolve(rootDir, 'build'),
  htmlTemplate: path.resolve(rootDir, 'public/index.html'),
};

module.exports = {
  entry: paths.entry,

  output: {
    path: paths.output,
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-2'],
          },
        },
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: paths.htmlTemplate,
    }),
  ],
};
