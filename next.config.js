/* eslint-disable @typescript-eslint/no-var-requires */
// next.config.js
const withSass = require('@zeit/next-sass');

const withImages = require('next-images');
module.exports = withSass(
  withImages({
    webpack(config) {
      return config;
    },
  }),
);
