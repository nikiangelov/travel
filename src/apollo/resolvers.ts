import { IResolvers } from 'apollo-server-micro';
import allQuotes from '../data/quotes.json';

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
      const num = Math.floor(Math.random() * allQuotes.length);
      return allQuotes[num];
    },
  },
};

export default resolvers;
