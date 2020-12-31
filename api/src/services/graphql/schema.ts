import { gql } from "apollo-server-express";

const schema = gql`
  type Post {
    id: Int,
    text: String
  }

  type RootQuery {
    posts: [Post]
  }

  input PostInput {
    text: String!
  }

  input UserInput {
    username: String!
    avatar: String!
  }

  type RootMutation {
    addPost (post: PostInput!, user: UserInput!): Post
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

export default schema;