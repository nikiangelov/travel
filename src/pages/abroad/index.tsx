import React, { ReactElement } from 'react';
import Layout from '../../components/Layout/Layout';
import withApollo from '../../apollo/with-apollo';

function abroad(): ReactElement {
  return (
    <Layout>
      <div>abroad</div>
    </Layout>
  );
}

export default withApollo(abroad);
