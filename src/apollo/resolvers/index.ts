import { IResolvers } from 'apollo-server-micro';
import citiesResolvers from './cities';
import attractionsResolvers from './attractions';

const resolvers: IResolvers = {
  Query: {
    ...citiesResolvers.query,
    ...attractionsResolvers.query,
  },
};

export default resolvers;
