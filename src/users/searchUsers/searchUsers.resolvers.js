import client from "../../client";

export default {
  Query: {
    searchUsers: async (_, { keyword, lastId }) => {
      const users = await client.user.findMany({
        where: {
          userName: {
            startsWith: keyword.toLowerCase(),
          },
        },
        take: 5,
        skip: lastId ? 1 : 0,
        ...(lastId && { cursor: { id: lastId } }),
      });

      return users;
    },
  },
};
