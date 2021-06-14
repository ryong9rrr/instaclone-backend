import { gql } from "apollo-server";

export default gql`
  type Room {
    id: Int!
    users: [User]
    messages: [Message]
    createdAt: String!
    updatedAt: String!
    unreadTotal: Int!
  }

  type Message {
    id: Int!
    payload: String!
    user: User!
    room: Room!
    read: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    rooms: [Room]
  }
`;
