import { IResolvers } from 'apollo-server-micro';

const resolvers: IResolvers = {
  Query: {
    viewer(_parent, _args, _context, _info) {
      return { id: 1, name: 'John Smith', status: 'cached' };
    },
    quote(_parent, _args, _context, _info) {
      console.log('%c props', 'background-color:green; color: white;', {
        _parent,
        _args,
        _context,
        _info,
      });
      return {};
    },
  },
};

export default resolvers;
