import { mergeResolvers } from 'merge-graphql-schemas';
import Country from './Country';
import City from './City';
import Attraction from './Attraction';
import User from './User';
import Travellog from './Travellog';

const resolvers = [Country, City, Attraction, User, Travellog];

export default mergeResolvers(resolvers);
