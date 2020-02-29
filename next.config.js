/* eslint-disable @typescript-eslint/no-var-requires */
// next.config.js
const withSass = require('@zeit/next-sass');

const withImages = require('next-images');
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

      return config;
    },
  }),
);
