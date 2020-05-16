import Attraction from '../models/Attraction';

export default {
  Query: {
    attractions: (_: any): any => {
      return new Promise((resolver, reject) => {
        Attraction.find()
          // .populate()
          .exec((error, response) => {
            error ? reject(error) : resolver(response);
          });
      });
    },
  },
  Mutation: {
    addAttraction: (_: any, { name }: any): any => {
      const newAttraction = new Attraction({
        name,
        description: 'description test',
      });
      return new Promise((resolver, reject) => {
        newAttraction.save((error: any, response: any) => {
          error ? reject(error) : resolver(response);
        });
      });
    },
  },
};
