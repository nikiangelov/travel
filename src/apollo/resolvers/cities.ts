import City from '../models/City';
import CityInterface from '../../interfaces/city';

export default {
  Query: {
    citiesAll: (_parent, _args, _context, _info): CityInterface[] => {
      return City.all();
    },
    city: (_parent, _args, _context, _info) => {
      const { id } = _args;
      return City.getById(id);
    },
  },
};
