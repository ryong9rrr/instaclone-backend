import client from "../../client";
import { protectedResolver } from "../users.utils";

const resolverFn = async (_, __, { loggedInUser }) => {
  const user = await client.user.findUnique({
    where: {
      id: loggedInUser.id,
    },
  });

  return user;
};

export default {
  Query: {
    me: protectedResolver(resolverFn),
  },
};
