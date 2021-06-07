import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

const resolverFn = async (_, { id }, { loggedInUser }) => {
  const comment = await client.comment.findUnique({
    where: { id },
    select: {
      photoId: true,
      userId: true,
      hashtags: {
        select: {
          hashtag: true,
        },
      },
    },
  });

  if (!comment) {
    return {
      ok: false,
      error: "Comment not found.",
    };
  } else if (comment.userId !== loggedInUser.id) {
    return {
      ok: false,
      error: "Not authorized",
    };
  } else {
    //hashtags 삭제
    console.log(comment);
    const hashtags = comment.hashtags.map((hashtag) => hashtag);

    await client.photo.update({
      where: {
        id: comment.photoId,
      },
      data: {
        hashtags: {
          disconnect: hashtags,
        },
      },
    });

    //comment 삭제
    await client.comment.delete({
      where: {
        id,
      },
    });
  }

  return {
    ok: true,
  };
};

export default {
  Mutation: {
    deleteComment: protectedResolver(resolverFn),
  },
};
