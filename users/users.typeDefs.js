import { gql } from "apollo-server";

export default gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String
    userName: String!
    email: String!
    bio: String
    avatar: String
    followers: [User]
    following: [User]
    createdAt: String!
    updatedAt: String!
    totalFollowers: Int!
    totalFollowing: Int!
    isMe: Boolean!
    isFollowing: Boolean!
  }

  type Query {
    users: [User]
  }
`;
