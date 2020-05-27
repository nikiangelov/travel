import * as React from 'react';
import AnimatedLayout from '../components/Layout/AnimatedLayout';
import withApollo from '../apollo/with-apollo';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useUserCountQuery } from '../apollo/state/queries/user.graphql';
import { useUsersQuery } from '../graphql/queries/user.graphql';

const AboutPage: React.FunctionComponent = () => {
  const { data: usersData } = useUsersQuery({
    fetchPolicy: 'cache-and-network',
  });

  const { data } = useUserCountQuery();
  const [setUserCount] = useMutation(gql`
    mutation SetUserCount($count: Int!) {
      setUserCount(count: $count) @client
    }
  `);
  const client = useApolloClient();
  return (
    <AnimatedLayout>
      <h1>About</h1>
      {/* {!!loading && <div>loading...</div>} */}
      <h2>All users:</h2>
      {usersData &&
        usersData.users &&
        usersData.users.map(user => <p key={user?._id}>{user?.email}</p>)}
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
    </AnimatedLayout>
  );
};

export default withApollo(AboutPage);
