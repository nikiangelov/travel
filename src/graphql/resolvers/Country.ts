import Country from '../models/Country';
import { QueryResolvers, MutationResolvers } from '../type-defs.graphqls';
import { ResolverContext } from '../../apollo/with-apollo';
import { IResolvers } from 'graphql-tools';

const Query: QueryResolvers<ResolverContext> = {
  countries: (_: any): any => {
    return new Promise((resolver, reject) => {
      Country.find()
        // .populate()
        .exec((error, response) => {
          error ? reject(error) : resolver(response);
        });
    });
  },
  country: async (_parent, _args, _context, _info): Promise<any> => {
    const findCountry = await Country.findOne(_args).exec();
    return findCountry;
  },
};
const Mutation: MutationResolvers<ResolverContext> = {
  addCountry: (_: any, { country }: any): any => {
    const newCountry = new Country(country);
    return new Promise((resolve, reject) => {
      newCountry.save((error: any, response: any) => {
        error ? reject(error) : resolve(response);
      });
    });
  },
};
export default {
  Query,
  Mutation,
} as IResolvers;
