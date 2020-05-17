import City from '../models/City';

export default {
  Query: {
    cities: (_: any): any => {
      return new Promise((resolver, reject) => {
        City.find()
          // .populate()
          .exec((error, response) => {
            error ? reject(error) : resolver(response);
          });
      });
    },
  },
  Mutation: {
    addCity: (_: any, { city }: any): any => {
      const newCity = new City(city);
      return new Promise((resolver, reject) => {
        newCity.save((error: any, response: any) => {
          error ? reject(error) : resolver(response);
        });
      });
    },
  },
};
