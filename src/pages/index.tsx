import * as React from 'react';

import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import { NextPage } from 'next';

class IndexPage extends React.Component<NextPage> {
  render(): JSX.Element {
    return (
      <Layout>
        <h1>Hello Next.js 👋</h1>
        <p>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
      </Layout>
    );
  }
}

export default IndexPage;
