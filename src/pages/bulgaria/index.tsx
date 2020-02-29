import React, { ReactElement } from 'react';
import Layout from '../../components/Layout/Layout';
import withApollo from '../../apollo/with-apollo';
import Link from 'next/link';
import { useViewerQuery } from '../../apollo/viewer.graphql';

function bulgaria(): ReactElement {
  const { data } = useViewerQuery();
  if (!data) return <div>...</div>;

  const { viewer } = data;
  return (
    <Layout>
      <div>bulgaria</div>
      <div>
        You&apos;re signed in as {viewer.name} and you&apos;re {viewer.status}{' '}
        goto{' '}
        <Link href="/about">
          <a>static</a>
        </Link>{' '}
        page.
      </div>
      <img
        src="https://images.unsplash.com/photo-1582466623797-8a7544a402d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1582412821971-125cc2eb8b29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1582429446367-24ea643ce428?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
    </Layout>
  );
}

export default withApollo(bulgaria);