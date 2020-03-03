import * as React from 'react';
import { NextPageContext } from 'next';

import { User } from '../../interfaces';
import AnimatedLayout from '../../components/Layout/AnimatedLayout';
import ListDetail from '../../components/ListDetail';
import API from '../../utils/network-client';

type Props = {
  item?: User;
  errors?: string;
};

class InitialPropsDetail extends React.Component<Props> {
  static getInitialProps = async ({ query }: NextPageContext) => {
    try {
      const { id } = query;
      const item = await API.get(
        `http://localhost:3000/api/users/${Array.isArray(id) ? id[0] : id}`,
      );
      return { item };
    } catch (err) {
      return { errors: err.message };
    }
  };

  render() {
    const { item, errors } = this.props;

    if (errors) {
      return (
        <AnimatedLayout>
          <p>
            <span style={{ color: 'red' }}>Error:</span> {errors}
          </p>
        </AnimatedLayout>
      );
    }

    return (
      <AnimatedLayout>{item && <ListDetail item={item} />}</AnimatedLayout>
    );
  }
}

export default InitialPropsDetail;
