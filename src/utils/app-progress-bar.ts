import { Router } from 'next/router';
import NProgress from 'nprogress';
Router.events.on('routeChangeStart', () => {
  // NProgress.configure({ showSpinner: false });
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
