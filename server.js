require("dotenv").config();
import { ApolloServer } from "apollo-server";
import schema from "./schema";

const server = new ApolloServer({
  schema,
  context: async ({ req }) => {
    return await {
      token: req.headers.token,
    };
  },
});

const PORT = process.env.PORT;

server.listen(PORT).then(() => {
  console.log(`🚀 Server ready at http://localhost:${PORT}/`);
});
