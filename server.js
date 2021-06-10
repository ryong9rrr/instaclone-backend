require("dotenv").config();
import { graphqlUploadExpress } from "graphql-upload";
import express from "express";
import logger from "morgan";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";
import { getUser } from "./users/users.utils";

const PORT = process.env.PORT;
const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  uploads: false,
  context: async ({ req }) => {
    return {
      loggedInUser: await getUser(req.headers.token),
    };
  },
});

const app = express();
app.use(logger("tiny"));
app.use(graphqlUploadExpress());
// applyMiddleware 는 항상 logger 바로 뒤에 있어야함
apollo.applyMiddleware({ app });

app.use("/static", express.static("uploads"));
app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
});
