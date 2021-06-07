import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

const resolverFn = async (_, { id }, { loggedInUser }) => {
  const photo = await client.photo.findUnique({
    where: {
      id,
    },
    select: {
      userId: true,
      hashtags: {
        select: {
          hashtag: true,
        },
      },
      likes: {
        select: {
          userId: true,
        },
      },
    },
  });
  if (!photo) {
    return {
      ok: false,
      error: "Photo not found.",
    };
  } else if (photo.userId !== loggedInUser.id) {
    return {
      ok: false,
      error: "Not authorized.",
    };
  } else {
    //hashtags 삭제
    const hashtags = photo.hashtags.map((hashtag) => hashtag);
    await client.photo.update({
      where: {
        id,
      },
      data: {
        hashtags: {
          disconnect: hashtags,
        },
      },
    });

    //좋아요 삭제
    await client.like.deleteMany({
      where: {
        photoId: id,
      },
    });

    //댓글 삭제
    await client.comment.deleteMany({
      where: {
        photoId: id,
      },
    });

    //photo 삭제
    await client.photo.delete({
      where: { id },
    });
  }

  return {
    ok: true,
  };
};

export default {
  Mutation: {
    deletePhoto: protectedResolver(resolverFn),
  },
};
