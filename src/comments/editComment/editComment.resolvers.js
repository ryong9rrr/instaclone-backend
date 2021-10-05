import client from "../../client";
import { getHashtags, processHashtags } from "../../photos/photos.utils";
import { protectedResolver } from "../../users/users.utils";

const resolverFn = async (_, { id, payload }, { loggedInUser }) => {
  const oldComment = await client.comment.findUnique({
    where: {
      id,
    },
    select: {
      userId: true,
      photoId: true,
      hashtags: {
        select: {
          hashtag: true,
        },
      },
    },
  });

  if (!oldComment) {
    return {
      ok: false,
      error: "Comment not found.",
    };
  } else if (oldComment.userId !== loggedInUser.id) {
    return {
      ok: false,
      error: "Not authorized.",
    };
  } else {
    //hashtags in photo
    await client.photo.update({
      where: { id: oldComment.photoId },
      data: {
        hashtags: {
          disconnect: oldComment.hashtags,
          connectOrCreate: processHashtags(payload),
        },
      },
    });

    //comment
    await client.comment.update({
      where: { id },
      data: {
        payload,
        hashtags: {
          disconnect: oldComment.hashtags,
          connectOrCreate: processHashtags(payload),
        },
      },
    });

    return {
      ok: true,
    };
  }
};

export default {
  Mutation: {
    editComment: protectedResolver(resolverFn),
  },
};
