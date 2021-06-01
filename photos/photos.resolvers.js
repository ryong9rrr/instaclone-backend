import client from "../client";

export default {
  Photo: {
    user: ({ userId }) => {
      return client.user.findUnique({ where: { id: userId } });
    },
    hashtags: ({ id }) => {
      return client.hashtag.findMany({ where: { photos: { some: { id } } } });
    },
  },
  Hashtag: {
    photos: ({ id }, { lastId }, { loggedInUser }) => {
      return client.hashtag.findUnique({ where: { id } }).photos({
        take: 5,
        skip: lastId ? 1 : 0,
        ...(lastId && { cursor: { id: lastId } }),
      });
    },
    totalPhotos: ({ id }) => {
      return client.photo.count({ where: { hashtags: { some: { id } } } });
    },
  },
};
