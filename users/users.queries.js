import client from "../client";

export default {
  Query: {
    users: () => client.user.findMany(),
    seeProfile: (_, { userName }) =>
      client.user.findUnique({ where: { userName } }),
  },
};
