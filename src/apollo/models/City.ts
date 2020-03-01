import CityInterface from '../../interfaces/city';
import cities from '../../data/cities';

class City {
  static all(): CityInterface[] {
    return cities;
  }
  static getById(id: number): CityInterface | null {
    return cities.find(x => x.id == id) || null;
  }
  static getByUrlSlug(slug: string): CityInterface | null {
    return cities.find(x => x.url_slug === slug) || null;
  }
}

export default City;
