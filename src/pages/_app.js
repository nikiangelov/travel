import * as React from 'react';
import Head from 'next/head';
import '../assets/styles/theme.scss';
import constants from '../constants';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{constants.siteTitle}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
