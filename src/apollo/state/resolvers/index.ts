export const resolvers = {
  Mutation: {
    setUserCount: (_: any, { count }: any, { cache }: any): any => {
      cache.writeData({
        data: {
          userCount: count,
        },
      });
    },
  },
};
