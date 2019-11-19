const path = require('path');

const SRC = path.join(__dirname, '/client/src');
const DIST = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC}/index.jsx`,
  output: {
    path: DIST,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
