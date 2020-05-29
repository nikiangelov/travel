import Attraction from '../models/Attraction';
import { QueryResolvers, MutationResolvers } from '../type-defs.graphqls';
import { ResolverContext } from '../../apollo/with-apollo';
import { IResolvers } from 'graphql-tools';

const Query: QueryResolvers<ResolverContext> = {
  attraction: async (_parent, _args, _context, _info): Promise<any> => {
    return await Attraction.findOne(_args).exec();
  },
  attractions: (
    _parent,
    { city_url_slug, limit },
    _context,
    _info,
  ): Promise<any> => {
    const limitAttractions = limit ? limit : 10;
    return new Promise((resolve, reject) => {
      Attraction.find({ city_url_slug })
        .limit(limitAttractions)
        .exec((error, response) => {
          error ? reject(error) : resolve(response);
        });
    });
  },
};
const Mutation: MutationResolvers<ResolverContext> = {
  addAttractions: (_: any, { attractions }: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      Attraction.insertMany(attractions)
        .then(function(docs) {
          resolve(docs);
        })
        .catch(function(err) {
          reject(err);
        });
    });
  },
  // TODO: to add auth
  editAttraction: async (_, { _id, attraction }, _context): Promise<any> => {
    let newSet = { ...attraction };
    const response = await Attraction.findByIdAndUpdate(
      { _id },
      { $set: newSet },
      { new: true },
    ).exec();
    if (!response) {
      throw new Error(`Проблем при редакцията`);
    }
    return response;
  },
};

export default {
  Query,
  Mutation,
} as IResolvers;
