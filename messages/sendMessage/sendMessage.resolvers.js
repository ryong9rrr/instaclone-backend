import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

const resolverFn = async (_, { userId, roomId, payload }, { loggedInUser }) => {
  //본인에게는 보낼수 없음.
  if (userId === loggedInUser.id) {
    return {
      ok: false,
      error: "can't send a message to yourself.",
    };
  }

  let room = null;
  //userId면 방을 새로판다, rooId면 방을 찾는다.
  if (userId) {
    const user = await client.user.findUnique({
      where: { id: userId },
      select: { id: true },
    });
    if (!user) {
      return {
        ok: false,
        error: "This user does not exist.",
      };
    }
    //이미 나와 상대가 존재하는 room이 있는지 확인
    const existRoom = await client.room.findFirst({
      where: {
        AND: [
          {
            users: { some: { id: userId } },
          },
          {
            users: { some: { id: loggedInUser.id } },
          },
        ],
      },
      select: {
        id: true,
      },
    });

    //room이 존재하지 않으면 방을 create
    if (!existRoom) {
      room = await client.room.create({
        data: {
          users: {
            connect: [
              {
                id: loggedInUser.id,
              },
              {
                id: userId,
              },
            ],
          },
        },
      });
    } else {
      room = await client.room.findUnique({
        where: {
          id: existRoom.id,
        },
        select: {
          id: true,
        },
      });
    }
  } else if (roomId) {
    room = await client.room.findUnique({
      where: {
        id: roomId,
      },
      select: {
        id: true,
      },
    });
    if (!room) {
      return {
        ok: false,
        error: "Room not found",
      };
    }
  }

  //그리고 message 전송
  const message = await client.message.create({
    data: {
      payload,
      room: {
        connect: {
          id: room.id,
        },
      },
      user: {
        connect: {
          id: loggedInUser.id,
        },
      },
    },
  });

  //해당 room update
  await client.room.update({
    where: {
      id: room.id,
    },
    data: {
      updatedAt: message.createdAt,
    },
  });

  return {
    ok: true,
  };
};

export default {
  Mutation: {
    sendMessage: protectedResolver(resolverFn),
  },
};
