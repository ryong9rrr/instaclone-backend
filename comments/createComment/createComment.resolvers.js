import client from "../../client";
import { processHashtags } from "../../photos/photos.utils";
import { protectedResolver } from "../../users/users.utils";

const resolverFn = async (_, { photoId, payload }, { loggedInUser }) => {
  const ok = await client.photo.findUnique({
    where: { id: photoId },
    select: { id: true },
  });
  if (!ok) {
    return {
      ok: false,
      error: "Photo not found.",
    };
  }

  let hashtagObj = processHashtags(payload);

  await client.comment.create({
    data: {
      payload,
      photo: {
        connect: {
          id: photoId,
        },
      },
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

  //photo에 comment의 hashtags 추가
  if (hashtagObj.length > 0) {
    await client.photo.update({
      where: {
        id: photoId,
      },
      data: {
        hashtags: {
          connectOrCreate: hashtagObj,
        },
      },
    });
  }

  return {
    ok: true,
  };
};

export default {
  Mutation: {
    createComment: protectedResolver(resolverFn),
  },
};
