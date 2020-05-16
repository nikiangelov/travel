import CountryInterface from '../../interfaces/country';
import countries from '../../data/countries/index';

class Country {
  static all(): CountryInterface[] {
    return countries;
  }
  static getById(id: number): CountryInterface {
    return countries.find(x => x.id == id) as CountryInterface;
  }
  static getByCode(code: string): CountryInterface {
    return countries.find(x => x.code === code) as CountryInterface;
  }
}

export default Country;
