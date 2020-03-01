/* eslint-disable @typescript-eslint/no-var-requires */
// next.config.js
require('./env.js');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const webpack = require('webpack');

module.exports = withSass(
  withImages({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.graphql$/,
        exclude: /node_modules/,
        use: [options.defaultLoaders.babel, { loader: 'graphql-let/loader' }],
      });

      config.module.rules.push({
        test: /\.graphqls$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      });
      config.plugins.push(new webpack.EnvironmentPlugin(process.env));

      return config;
    },
  }),
);
