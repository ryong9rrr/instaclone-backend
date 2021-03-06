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
    photos: [Photo]
    followers: [User]
    following: [User]
    rooms: [Room]
    messages: [Message]
    createdAt: String!
    updatedAt: String!
    totalPhotos: Int!
    totalFollowers: Int!
    totalFollowing: Int!
    isMe: Boolean!
    isFollowing: Boolean!
  }

  type Query {
    users: [User]
  }
`;
