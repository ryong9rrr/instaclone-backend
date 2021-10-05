require("dotenv").config();
import http from "http";
import { graphqlUploadExpress } from "graphql-upload";
import express from "express";
import logger from "morgan";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";
import { getUser } from "./users/users.utils";

const PORT = process.env.PORT;
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  uploads: false,
  context: async (ctx) => {
    //http request일 때
    if (ctx.req) {
      return {
        loggedInUser: await getUser(ctx.req.headers.token),
      };
    } //ws listening 할 때
    else {
      // 이 값은 roomUpdates.resolvers 의 context 값에 담긴다.
      return {
        loggedInUser: ctx.connection.context.loggedInUser,
      };
    }
  },
  subscriptions: {
    // 여기서 return한 값이 context 필드로 넘어가서 ctx.connection.context에 담긴다.
    //(connectionParams, webSocket, context)
    onConnect: async ({ token }, webSocket, context) => {
      if (!token) {
        throw new Error("You can't listen.");
      }
      const loggedInUser = await getUser(token);
      return {
        loggedInUser,
      };
    },
  },
});

const app = express();
app.use(logger("tiny"));
app.use(graphqlUploadExpress());
// applyMiddleware 는 항상 logger 바로 뒤에 있어야함
apolloServer.applyMiddleware({ app });
app.use("/static", express.static("uploads"));

const httpServer = http.createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
});
