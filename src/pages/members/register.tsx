import * as React from 'react';
import AnimatedLayout from '../../components/Layout/AnimatedLayout';
import withApollo from '../../apollo/with-apollo';

const RegisterPage: React.FunctionComponent = () => {
  return (
    <AnimatedLayout>
      <h1>Register Page</h1>
      <p>Enter your details here</p>
    </AnimatedLayout>
  );
};

export default withApollo(RegisterPage);
