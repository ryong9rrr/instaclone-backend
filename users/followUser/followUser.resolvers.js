import client from "../../client";
import { protectedResolver } from "../users.utils";

// toFollow는 반영하지않고, 로그인한 유저만 업데이트 한다.
//왜냐하면 로그인한 유저가 팔로잉을 하게되면 자동적으로 상대방의 팔로워가 늘어날 것이므로!
const resolverFn = async (_, { userName }, { loggedInUser }) => {
  const ok = await client.user.findUnique({ where: { userName } });
  if (!ok) {
    return {
      ok: false,
      error: "That user does not exist.",
    };
  }
  await client.user.update({
    where: { id: loggedInUser.id },
    data: {
      following: {
        connect: {
          userName,
        },
      },
    },
  });
  return {
    ok: true,
  };
};

export default {
  Mutation: {
    followUser: protectedResolver(resolverFn),
  },
};
