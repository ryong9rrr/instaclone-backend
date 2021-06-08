import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import { processHashtags, getHashtags } from "../photos.utils";

const resolverFn = async (_, { id, caption }, { loggedInUser }) => {
  // 사진의 userId(소유자) 가 로그인한 유저와 같은지 확인
  const oldPhoto = await client.photo.findFirst({
    where: {
      id,
      userId: loggedInUser.id,
    },
    include: {
      hashtags: {
        select: {
          hashtag: true,
        },
      },
    },
  });

  if (!oldPhoto) {
    return {
      ok: false,
      error: "Photo not found.",
    };
  }

  await client.photo.update({
    where: { id },
    data: {
      caption,
      hashtags: {
        //array
        disconnect: getHashtags(oldPhoto.caption),
        connectOrCreate: processHashtags(caption),
      },
    },
  });

  return {
    ok: true,
  };
};

export default {
  Mutation: {
    editPhoto: protectedResolver(resolverFn),
  },
};
