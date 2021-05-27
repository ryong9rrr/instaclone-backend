import client from "../../client";

export default {
  Query: {
    seeFollowers: async (_, { userName, page }) => {
      const followers = await client.user
        .findUnique({ where: { userName } })
        .followers({
          //1 page 당 5명의 유저를 가져온다.
          take: 5,
          skip: (page - 1) * 5,
        });
      return {
        ok: true,
        followers,
      };
    },
  },
};
