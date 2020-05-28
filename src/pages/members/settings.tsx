import * as React from 'react';
import AnimatedLayout from '../../components/Layout/AnimatedLayout';
import withApollo from '../../apollo/with-apollo';
import linkBuilder from '../../utils/link-builder';
import { useRouter } from 'next/router';
// import { privateRoute } from '../../hocs/privateRoute';

const SettingsPage: React.FunctionComponent = (props: any) => {
  const { lng } = props;
  const router = useRouter();

  return (
    <AnimatedLayout>
      <h2>Hello somebody</h2>
      <h3>url: {linkBuilder('/members/login', lng)}</h3>
      {/* <p>{getUrl('/members/settings')}</p> */}
      <button
        onClick={() => {
          router.replace('/');
        }}
        className="btn btn-success mr-3"
      >
        Bulgarian
      </button>
      <button
        onClick={() => {
          window.location.replace('/index?lang=en');
        }}
        className="btn btn-success mr-3"
      >
        English
      </button>
    </AnimatedLayout>
  );
};

export default withApollo(SettingsPage, {
  protectedRoute: true,
});
