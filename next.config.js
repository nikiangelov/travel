/* eslint-disable @typescript-eslint/no-var-requires */
// next.config.js
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
require('./env.js');

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
      // config.plugins.push(new webpack.EnvironmentPlugin(process.env));

      return config;
    },
    env: {
      TEST_VAR: process.env.TEST_VAR,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_PUBLIC_API_KEY: process.env.FIREBASE_PUBLIC_API_KEY,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    },
  }),
);
