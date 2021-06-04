import client from "../client";

export default {
  Comment: {
    user: ({ userId }) => client.user.findUnique({ where: { id: userId } }),
    photo: ({ photoId }) => client.photo.findUnique({ where: { id: photoId } }),
  },
};
