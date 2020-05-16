import { ApolloServer } from 'apollo-server-micro';
import schema from '../../graphql/schema';

// connect to mongodb

// createa apollo server
const apolloServer = new ApolloServer({ schema });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
