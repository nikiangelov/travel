import City from '../models/City';
import { QueryResolvers, MutationResolvers } from '../type-defs.graphqls';
import { ResolverContext } from '../../apollo/with-apollo';
import { IResolvers } from 'graphql-tools';

const Query: QueryResolvers<ResolverContext> = {
  cities: (_parent, _args, _context, _info): Promise<any> => {
    return new Promise((resolver, reject) => {
      City.find()
        // .populate()
        .exec((error, response) => {
          error ? reject(error) : resolver(response);
        });
    });
  },
  city: async (_parent, _args, _context, _info): Promise<any> => {
    console.log({ _args });
    const findCity = await City.findOne(_args).exec();
    return findCity;
  },
};
const Mutation: MutationResolvers<ResolverContext> = {
  addCity: (_: any, { city }: any): Promise<any> => {
    const newCity = new City(city);
    return new Promise((resolver, reject) => {
      newCity.save((error: any, response: any) => {
        error ? reject(error) : resolver(response);
      });
    });
  },
};
export default {
  Query,
  Mutation,
} as IResolvers;
