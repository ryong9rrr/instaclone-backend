import { gql } from "apollo-server";

//file: Upload! 지만 임시로
export default gql`
  type Mutation {
    uploadPhoto(file: String!, caption: String): Photo
  }
`;
