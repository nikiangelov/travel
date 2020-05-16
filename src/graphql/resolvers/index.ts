import { mergeResolvers } from 'merge-graphql-schemas';
import Country from './Country';
import City from './City';
import Attraction from './Attraction';

const resolvers = [Country, City, Attraction];

export default mergeResolvers(resolvers);
