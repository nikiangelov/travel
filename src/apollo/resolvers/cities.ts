import City from '../models/City';
import CityInterface from '../../interfaces/city';

export default {
  Query: {
    citiesAll: (
      _parent: any,
      _args: any,
      _context: any,
      _info: any,
    ): CityInterface[] => {
      return City.all();
    },
    city: (_parent: any, _args: any, _context: any, _info: any) => {
      const { id } = _args;
      return City.getById(id);
    },
  },
};
