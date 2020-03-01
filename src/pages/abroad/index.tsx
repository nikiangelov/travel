import React, { ReactElement } from 'react';
import Layout from '../../components/Layout/Layout';
import withApollo from '../../apollo/with-apollo';
import {
  useCitiesQuery,
  useCityQuery,
} from '../../apollo/queries/cities.graphql';

function abroad(): ReactElement {
  const { data, loading } = useCitiesQuery();
  const { data: data2, loading: loading2 } = useCityQuery({
    variables: { id: '2' },
  });
  console.log({ data, loading });
  console.log({ data2, loading2 });
  return (
    <Layout>
      <div>abroad</div>
    </Layout>
  );
}

export default withApollo(abroad);
