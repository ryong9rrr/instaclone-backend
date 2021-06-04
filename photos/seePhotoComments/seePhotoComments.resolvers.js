import client from "../../client";

export default {
  Query: {
    seePhotoComments: (_, { id, lastId }) =>
      client.comment.findMany({
        where: {
          photoId: id,
        },
        take: 20,
        skip: lastId ? 1 : 0,
        ...(lastId && { cursor: { id: lastId } }),
        orderBy: {
          createdAt: "asc",
        },
      }),
  },
};

/*
단순한 방법
client.photo.findUnique({ where: { id } }).comments()

혹은 seeHashtag에서 했던 것 처럼 page라는 값을 아래쪽으로 보내거나 할 수 있음.

*/
