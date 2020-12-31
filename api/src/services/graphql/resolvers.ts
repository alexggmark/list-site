import { Resolvers } from "./types/generated";

const resolvers: Resolvers = {
  RootQuery: {
    posts(root, args, context) {
      return [];
    }
  }
}

export default resolvers;