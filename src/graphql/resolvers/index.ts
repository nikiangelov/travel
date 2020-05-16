import { IResolvers } from 'apollo-server-micro';
import citiesResolvers from './cities';
import attractionsResolvers from './attractions';
import contriesResolvers from './countries';

const resolvers: IResolvers = {
  Query: {
    ...citiesResolvers.query,
    ...attractionsResolvers.query,
    ...contriesResolvers.query,
  },
};

export default resolvers;
