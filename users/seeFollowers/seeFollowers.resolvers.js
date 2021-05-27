import client from "../../client";

export default {
  Query: {
    seeFollowers: async (_, { userName, page }) => {
      const ok = client.user.findUnique({
        where: { userName },
        select: { id: true },
      });

      if (!ok) {
        return {
          ok: false,
          error: "User not found.",
        };
      }

      // user의 팔로워를 찾는다.
      const followers = await client.user
        .findUnique({ where: { userName } })
        .followers({
          //1 page 당 5명의 유저를 가져온다.
          take: 5,
          skip: (page - 1) * 5,
        });

      // user를 팔로잉하는 사람을 센다.
      const totalFollowers = await client.user.count({
        where: { following: { some: { userName } } },
      });

      return {
        ok: true,
        followers,
        totalPages: Math.ceil(totalFollowers / 5),
      };
    },
  },
};
