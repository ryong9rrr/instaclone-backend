import { gql } from "apollo-server";

export default gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String
    userName: String!
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  type Mutation {
    createAccount(
      firstName: String!
      lastName: String
      userName: String!
      email: String!
      password: String!
    ): User

    login(userName: String!, password: String!): LoginResult!

    editProfile(
      firstName: String
      lastName: String
      userName: String
      email: String
      password: String
    ): EditProfileResult!
  }
  type Query {
    users: [User]
    seeProfile(userName: String!): User
  }

  type LoginResult {
    ok: Boolean!
    token: String
    error: String
  }
  type EditProfileResult {
    ok: Boolean!
    error: String
  }
`;
