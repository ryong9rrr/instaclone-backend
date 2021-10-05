import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

const resolverFn = async (_, { lastId }, { loggedInUser }) => {
  const rooms = await client.room.findMany({
    where: {
      users: {
        some: {
          id: loggedInUser.id,
        },
      },
    },
    orderBy: {
      updatedAt: "desc",
    },
    take: 7,
    skip: lastId ? 1 : 0,
    ...(lastId && { cursor: { id: lastId } }),
  });
  return rooms;
};

export default {
  Query: {
    seeRooms: protectedResolver(resolverFn),
  },
};
