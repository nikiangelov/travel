import { mergeTypes } from 'merge-graphql-schemas';
import Global from './Global';
import Attraction from './Attraction';
import City from './City';
import Country from './Country';
import User from './User';
import Travellog from './Travellog';

const typeDefs = [Global, Attraction, City, Country, User, Travellog];

const mergedTypes = mergeTypes(typeDefs, { all: true });

// import { writeFileSync } from 'fs';
// writeFileSync('./src/graphql/type-defs.graphqls', mergedTypes);
// console.log('WRITE TO FILE', mergedTypes);
// console.log('--- WRITEN TO FILE ---');

export default mergedTypes;
