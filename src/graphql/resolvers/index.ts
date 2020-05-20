import { mergeResolvers } from 'merge-graphql-schemas';
import Country from './Country';
import City from './City';
import Attraction from './Attraction';
import User from './User';

const resolvers = [Country, City, Attraction, User];

export default mergeResolvers(resolvers);
