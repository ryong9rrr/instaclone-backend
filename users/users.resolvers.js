import client from "../client";

export default {
  Query: {
    users: () =>
      client.user.findMany({
        include: {
          followers: true,
          following: true,
        },
      }),
  },
  //computed fields
  User: {
    totalFollowers: ({ id }) =>
      client.user.count({
        where: {
          following: {
            some: {
              id,
            },
          },
        },
      }),
    totalFollowing: ({ id }) =>
      client.user.count({
        where: {
          followers: {
            some: {
              id,
            },
          },
        },
      }),
    isMe: ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      return id === loggedInUser.id;
    },
    isFollowing: async ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      /* 변수를 배열로 만들 때
      const exists0 = await client.user
        .findUnique({ where: { userName: loggedInUser.userName } })
        .following({ where: { id } });

      return exists0.length !== 0;
      */

      // 변수를 숫자로 만들 때(더 직관적)
      const exists = await client.user.count({
        where: {
          userName: loggedInUser.userName,
          following: {
            some: {
              id,
            },
          },
        },
      });
      return Boolean(exists);
    },
    photos: ({ id }) =>
      client.user.findUnique({ where: { id } }).photos({
        orderBy: {
          createdAt: "desc",
        },
      }),
    totalPhotos: ({ id }) =>
      client.photo.count({
        where: {
          userId: id,
        },
      }),
  },
};
