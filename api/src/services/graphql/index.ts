import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";
// import * as schema from "./schema.graphql";
import schema from "./schema";

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
})

const server = new ApolloServer({
  schema: executableSchema,
  context: ({req}) => req
})

export default server;