import { withFilter } from "apollo-server-express";
import client from "../client";
import { NEW_MESSAGE } from "../constants";
import pubsub from "../pubsub";

export default {
  Subscription: {
    roomUpdates: {
      subscribe: async (root, args, context, info) => {
        // sendMessage 에서 수정한 것과 마찬가지로 내가 없는 방에는 listening 할 수 없도록
        const room = await client.room.findFirst({
          where: {
            id: args.id,
            users: {
              some: {
                id: context.loggedInUser.id,
              },
            },
          },
          select: {
            id: true,
          },
        });

        if (!room) {
          throw new Error("You shall not see this.");
        }
        //publish(sendMessage)할때만 실행됨.
        return withFilter(
          () => pubsub.asyncIterator(NEW_MESSAGE),
          async (payload, variables, context) => {
            //일부러 구조분해할당 안했음.
            if (payload.roomUpdates.roomId === variables.id) {
              const room = await client.room.findFirst({
                where: {
                  id: variables.id,
                  users: {
                    some: {
                      id: context.loggedInUser.id,
                    },
                  },
                },
                select: {
                  id: true,
                },
              });

              if (!room) {
                return false;
              }
              return true;
            } else {
              return false;
            }
          }
        )(root, args, context, info);
      },
    },
  },
};
