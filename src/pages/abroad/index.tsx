import React, { ReactElement } from 'react';
import AnimatedLayout from '../../components/Layout/AnimatedLayout';
import withApollo from '../../apollo/with-apollo';

function abroad(): ReactElement {
  return (
    <AnimatedLayout>
      <div>abroad</div>
    </AnimatedLayout>
  );
}

export default withApollo(abroad);
