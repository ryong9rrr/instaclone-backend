import client from "../../client";

export default {
  Query: {
    seeFollowers: async (_, { userName, page }) => {
      //1. user의 모든 팔로워를 찾는 법
      const aFollowers = await client.user
        .findUnique({ where: { userName } })
        .followers();
      console.log(aFollowers);

      //2. user를 팔로잉하는 사람들을 찾는법
      const bFollowers = await client.user.findMany({
        where: {
          following: {
            some: {
              userName,
            },
          },
        },
      });
      console.log(bFollowers);
    },
  },
};
