import * as React from 'react';
import { NextPageContext } from 'next';

import Layout from '../../components/Layout/Layout';

class InitialPropsDetail extends React.Component {
  static getInitialProps = ({ query }: NextPageContext): any => {
    return {
      test: 1,
    };
  };

  render() {
    return (
      <Layout>
        <p>hey</p>
      </Layout>
    );
  }
}

export default InitialPropsDetail;
