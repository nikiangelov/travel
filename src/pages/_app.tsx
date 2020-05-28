import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { AppProps } from 'next/app';
import I18n from '../lib/i18n';
import '../assets/styles/theme.scss';
import '../assets/styles/nprogress.scss';
import constants from '../constants';
import '../utils/app-progress-bar';

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>{constants.siteTitle}</title>
      </Head>
      <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={'app-' + router.route} />
        </AnimatePresence>
      </I18n>
    </>
  );
}
