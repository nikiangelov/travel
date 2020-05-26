import * as React from 'react';
import AnimatedLayout from '../components/Layout/AnimatedLayout';
import withApollo from '../apollo/with-apollo';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useUserCountQuery } from '../apollo/state/queries/user.graphql';

const AboutPage: React.FunctionComponent = () => {
  const { data } = useUserCountQuery();
  const [setUserCount] = useMutation(gql`
    mutation SetUserCount($count: Int!) {
      setUserCount(count: $count) @client
    }
  `);
  const client = useApolloClient();
  const handlePostReq = () => {
    fetch('/api/refresh_token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      }),
    });
  };
  return (
    <AnimatedLayout>
      <h1>About</h1>
      <h2>Count: {data?.userCount}</h2>
      <p>This is the about page</p>
      <p>
        <button
          onClick={(): any => {
            client.writeData({
              data: {
                userCount: Math.floor(Math.random() * 100),
              },
            });
          }}
        >
          Direct
        </button>
        <button
          onClick={(): any => {
            setUserCount({
              variables: {
                count: 13,
              },
            });
          }}
        >
          setcount
        </button>
      </p>
      <hr />
      <button onClick={handlePostReq} className="btn btn-success">
        POST
      </button>
    </AnimatedLayout>
  );
};

export default withApollo(AboutPage);
