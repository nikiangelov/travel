import * as React from 'react';
import AnimatedLayout from '../components/Layout/AnimatedLayout';
import withApollo from '../apollo/with-apollo';
import useI18n from '../hooks/use-i18n';

const AboutPage: React.FunctionComponent = props => {
  const i18n = useI18n();
  const username = 'Niki';
  return (
    <AnimatedLayout>
      <h1>Title: {i18n.t('intro.welcome', { username })}</h1>
    </AnimatedLayout>
  );
};

export default withApollo(AboutPage);
