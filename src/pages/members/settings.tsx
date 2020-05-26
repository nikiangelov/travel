import * as React from 'react';
import AnimatedLayout from '../../components/Layout/AnimatedLayout';
import withApollo from '../../apollo/with-apollo';

const SettingsPage: React.FunctionComponent = () => {
  return (
    <AnimatedLayout>
      <h1>Hello somebody</h1>
    </AnimatedLayout>
  );
};

export default withApollo(SettingsPage);
