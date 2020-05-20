import { mergeTypes } from 'merge-graphql-schemas';
// import { writeFileSync } from 'fs';
import Global from './Global';
import Attraction from './Attraction';
import City from './City';
import Country from './Country';
import User from './User';

const typeDefs = [Global, Attraction, City, Country, User];

const mergedTypes = mergeTypes(typeDefs, { all: true });

// writeFileSync('./src/graphql/type-defs.graphqls', mergedTypes);
// console.log('WRITE TO FILE', mergedTypes);

export default mergedTypes;
