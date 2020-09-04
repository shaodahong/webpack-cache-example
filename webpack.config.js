const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin()],
  },

  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: ['thread-loader', 'babel-loader'],
      },
    ],
  },
  cache: {
    type: 'filesystem',
    buildDependencies: { config: [__filename] },
  },
};
