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
  attraction: (
    _parent: any,
    _args: any,
    _context: any,
    _info: any,
  ): AttractionInterface => {
    const { id } = _args;
    let attraction = null;
    if (id) {
      attraction = Attractions.getById(id);
    }
    return attraction as AttractionInterface;
  },
};
export default { query };
