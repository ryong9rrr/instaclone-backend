import client from "../../client";

export default {
  Query: {
    seeFollowers: async (_, { userName, lastId }) => {
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
          //처음 5명의 유저, 이후로 5명의 유저
          take: 5,
          skip: lastId ? 1 : 0,
          ...(lastId && { cursor: { id: lastId } }),
        });

      // user를 팔로잉하는 사람을 센다.
      const totalFollowers = await client.user.count({
        where: { following: { some: { userName } } },
      });

      return {
        ok: true,
        followers,
        totalFollowers,
      };
    },
  },
};
