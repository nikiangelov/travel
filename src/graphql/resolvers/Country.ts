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
    addCountry: (_: any, { name }: any): any => {
      const newCountry = new Country({
        name,
        capital: 'test',
        coordinates: {
          lat: 24.533,
          lng: 42.4533,
        },
        qal: {
          index_min: 2,
          index_max: 5,
          safety_index: 2.3,
        },
      });
      return new Promise((resolver, reject) => {
        newCountry.save((error: any, response: any) => {
          error ? reject(error) : resolver(response);
        });
      });
    },
  },
};
