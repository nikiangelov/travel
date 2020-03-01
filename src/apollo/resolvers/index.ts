import { IResolvers } from 'apollo-server-micro';
import viewerResolvers from './viewer';
import citiesResolvers from './cities';

const resolvers: IResolvers = {
  ...viewerResolvers,
  ...citiesResolvers,
};

export default resolvers;
