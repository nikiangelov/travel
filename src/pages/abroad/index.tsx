import React, { ReactElement } from 'react';
import Layout from '../../components/Layout/Layout';
import withApollo from '../../apollo/with-apollo';
import { useQuoteQuery } from '../../apollo/queries/quote.graphql';

function abroad(): ReactElement {
  const { data, loading } = useQuoteQuery();
  console.log({ data, loading });
  return (
    <Layout>
      <div>abroad</div>
    </Layout>
  );
}

export default withApollo(abroad);
