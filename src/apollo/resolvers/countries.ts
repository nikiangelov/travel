import CountryModel from '../models/Country';
import CountryInterface from '../../interfaces/country';

const query = {
  country: (
    _parent: any,
    _args: any,
    _context: any,
    _info: any,
  ): CountryInterface => {
    const { code } = _args;
    let country = null;
    if (code) {
      country = CountryModel.getByCode(code);
    }
    return country as CountryInterface;
  },
};
export default { query };
