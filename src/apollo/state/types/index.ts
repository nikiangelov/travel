import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    userCount: Int
  }
  extend type Mutation {
    setUserCount(count: Int!): Int
  }
`;
