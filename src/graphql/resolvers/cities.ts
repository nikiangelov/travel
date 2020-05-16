import City from '../models/City';
import CityInterface from '../../interfaces/city';

const query = {
  citiesAll: (
    _parent: any,
    _args: any,
    _context: any,
    _info: any,
  ): CityInterface[] => {
    return City.all();
  },
  city: (_parent: any, _args: any, _context: any, _info: any) => {
    const { id, url_slug } = _args;
    let city = null;
    if (id) {
      city = City.getById(id);
    } else if (url_slug) {
      city = City.getByUrlSlug(url_slug);
    }
    return city;
  },
};
export default { query };
