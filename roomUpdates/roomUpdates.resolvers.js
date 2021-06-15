import { withFilter } from "apollo-server-express";
import { NEW_MESSAGE } from "../constants";
import pubsub from "../pubsub";

export default {
  Subscription: {
    roomUpdates: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(NEW_MESSAGE),
        (payload, variables) => {
          console.log(payload);
          console.log(variables);
          return payload.roomUpdates.roomId === variables.id;
        }
      ),
    },
  },
};
