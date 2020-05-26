import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../assets/styles/theme.scss';
import constants from '../constants';
import { fetchNewAccessToken } from '../utils/auth';

export default function MyApp({ Component, pageProps, router }: AppProps) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchNewAccessToken().finally(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>app is loading...</div>;
  }

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
