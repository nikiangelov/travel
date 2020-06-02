import Travellog from '../models/Travellog';
import User from '../models/User';
import { QueryResolvers, MutationResolvers } from '../type-defs.graphqls';
import { ResolverContext } from '../../apollo/with-apollo';
import { IResolvers } from 'graphql-tools';

const Query: QueryResolvers<ResolverContext> = {
  travellogs: (_parent, _args, _context, _info): Promise<any> => {
    return new Promise((resolve, reject) => {
      Travellog.find()
        // .populate()
        .exec((error, response) => {
          error ? reject(error) : resolve(response);
        });
    });
  },
  travellog: async (_parent, _args, _context, _info): Promise<any> => {
    const findTravellog = await Travellog.findOne(_args).exec();
    return findTravellog;
  },
};
const Mutation: MutationResolvers<ResolverContext> = {
  newTravellog: async (_: any, _args, { authenticatedUser }): Promise<any> => {
    console.log('newTravellog');
    if (!authenticatedUser) {
      throw new Error('Не сте влезли в профила си');
    }
    const author = await User.findOne({
      _id: authenticatedUser._id,
    });
    const newTravellog = new Travellog({
      author: {
        _id: author._id,
        firstName: author.firstName,
        lastName: author.lastName,
        email: author.email,
      },
      is_draft: true,
    });
    return new Promise((resolve, reject) => {
      newTravellog.save((error: any, response: any) => {
        error ? reject(error) : resolve(response);
      });
    });
  },
  editTravellog: async (
    _: any,
    { _id, travellog },
    { authenticatedUser },
  ): Promise<any> => {
    console.log('newTravellog');
    if (!authenticatedUser) {
      throw new Error('Не сте влезли в профила си');
    }
    const userData = await User.findOne({
      _id: authenticatedUser._id,
    });
    const currentTravellog = await Travellog.findOne({
      _id,
    });
    if (!userData) {
      throw new Error('Няма такъв потребител');
    }
    if (!currentTravellog) {
      throw new Error('Не е намерен този пътепис');
    }
    if (!currentTravellog.author._id.equals(userData._id)) {
      throw new Error('Нямате право да редактирате този пътепис');
    }
    // TODO: add html sanitize
    return Travellog.findByIdAndUpdate(
      { _id },
      { $set: { ...travellog } },
      { new: true },
    ).exec();
  },
};
export default {
  Query,
  Mutation,
} as IResolvers;
