import { ApolloServer } from 'apollo-server-micro';
import mongoose from 'mongoose';
import schema from '../../graphql/schema';
import { createResolverContext } from '../../apollo/with-apollo';

// connect to mongodb
const DB = process.env.MONGODB_URL || '';

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    autoIndex: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Connected');
  })
  .catch(error => {
    console.log(error);
  });
// mongoose.connection.once('open', () => console.log(`Connected to mongo`));

// createa apollo server
const apolloServer = new ApolloServer({
  schema,
  context: createResolverContext,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
