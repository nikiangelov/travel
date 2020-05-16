import { mergeTypes } from 'merge-graphql-schemas';
// import { writeFileSync } from 'fs';
import Global from './Global';
import Attraction from './Attraction';
import City from './City';
import Country from './Country';

const typeDefs = [Global, Attraction, City, Country];

const mergedTypes = mergeTypes(typeDefs, { all: true });

// writeFileSync('./src/graphql/type-defs.graphqls', mergedTypes);
// console.log('WRITE TO FILE', mergedTypes);

export default mergedTypes;
