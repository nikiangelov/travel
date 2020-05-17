import Country from '../models/Country';

export default {
  Query: {
    countries: (_: any): any => {
      return new Promise((resolver, reject) => {
        Country.find()
          // .populate()
          .exec((error, response) => {
            error ? reject(error) : resolver(response);
          });
      });
    },
  },
  Mutation: {
    addCountry: (_: any, { country }: any): any => {
      const newCountry = new Country(country);
      return new Promise((resolve, reject) => {
        newCountry.save((error: any, response: any) => {
          error ? reject(error) : resolve(response);
        });
      });
    },
  },
};
