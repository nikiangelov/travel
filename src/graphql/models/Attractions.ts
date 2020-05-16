import AttractionInterface from '../../interfaces/attraction';
import attractions from '../../data/attractions';

class Attractions {
  static all(): AttractionInterface[] {
    return attractions as AttractionInterface[];
  }
  static getByUrlSlug(
    slug: string,
    limit: number | null,
  ): AttractionInterface[] {
    const result = attractions.filter(x => x.city_url_slug === slug);
    if (limit) {
      return [...result].splice(0, limit) as AttractionInterface[];
    }
    return result as AttractionInterface[];
  }
  static getById(id: string): AttractionInterface {
    const result = attractions.find(x => x.id.toString() === id);
    return result as AttractionInterface;
  }
}

export default Attractions;
