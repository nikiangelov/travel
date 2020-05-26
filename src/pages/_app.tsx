import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../assets/styles/theme.scss';
import constants from '../constants';

export default function MyApp({ Component, pageProps, router }: AppProps) {
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
