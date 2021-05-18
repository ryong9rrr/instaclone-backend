import { ApolloServer, gql } from "apollo-server";
import { PrismaClient } from "@prisma/client";

// The GraphQL schema
// schema.prisma 와 필수입력값을 일치시켜줘야함.
const typeDefs = gql`
  type Movie {
    id: Int!
    title: String!
    year: Int!
    genre: String
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    movies: [Movie]
    movie: Movie
  }
  type Mutation {
    createMovie(title: String!): Boolean
    deleteMovie(title: String!): Boolean
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    movies: () => [],
    movie: () => ({ title: "hello", year: 2021 }),
  },
  Mutation: {
    createMovie: (_, { title }) => {
      console.log(_, title);
      return true;
    },
    deleteMovie: (_, args) => {
      console.log(_, args);
      return true;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
