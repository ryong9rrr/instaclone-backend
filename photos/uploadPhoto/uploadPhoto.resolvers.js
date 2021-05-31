import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

const resolverFn = async (_, { file, caption }, { loggedInUser }) => {
  let hashtagObj = [];
  const hashtags = await caption.match(/#[\w]+/g);
  if (caption && hashtags) {
    hashtagObj = hashtags.map((hashtag) => ({
      where: { hashtag },
      create: { hashtag },
    }));
  }
  return client.photo.create({
    data: {
      file,
      caption,
      user: {
        connect: {
          id: loggedInUser.id,
        },
      },
      ...(hashtagObj.length > 0 && {
        hashtags: {
          connectOrCreate: hashtagObj,
        },
      }),
    },
  });
};

export default {
  Mutation: {
    uploadPhoto: protectedResolver(resolverFn),
  },
};
