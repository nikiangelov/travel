import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import '../assets/styles/theme.scss';
import constants from '../constants';

export default function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>{constants.siteTitle}</title>
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={'app-' + router.route} />
      </AnimatePresence>
    </>
  );
}
