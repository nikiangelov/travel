import Attractions from '../models/Attractions';
import AttractionInterface from '../../interfaces/attraction';

const query = {
  attractions: (
    _parent: any,
    _args: any,
    _context: any,
    _info: any,
  ): AttractionInterface[] => {
    const { city_url_slug } = _args;
    let result: AttractionInterface[] = [];
    if (city_url_slug) {
      result = Attractions.getByUrlSlug(city_url_slug);
    } else {
      result = Attractions.all();
    }
    return result;
  },
};
export default { query };
