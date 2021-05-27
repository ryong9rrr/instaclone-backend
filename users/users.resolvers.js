import client from "../client";

export default {
  Query: {
    users: () => {
      return client.user.findMany({
        include: {
          followers: true,
          following: true,
        },
      });
    },
  },
};
