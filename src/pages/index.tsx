import React from 'react';

import Link from 'next/link';
import Layout from '../components/Layout';
import { NextPage } from 'next';

class IndexPage extends React.Component<NextPage> {
  render(): JSX.Element {
    return (
      <Layout title="Home | Next.js + TypeScript Example">
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
