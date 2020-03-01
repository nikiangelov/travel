import { IResolvers } from 'apollo-server-micro';
import viewerResolvers from './viewer';

const resolvers: IResolvers = {
  ...viewerResolvers,
};

export default resolvers;
