import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";

import { init_db } from "./database";
import { Resolvers, UsersResolvers } from "./schema/";
import { authServer, authChecker } from "./auth";

const main = async () => {
  await init_db();
  console.log('Database created.');

  const schema = await buildSchema({
    resolvers: [ Resolvers, UsersResolvers ],
    authChecker
  });

  const apolloServer = new ApolloServer({
    schema,
    context: authServer
  });

  const app = express();
  apolloServer.applyMiddleware({ app });
  app.listen(
    4000,
    () => {
      console.log(`Server started on http://localhost:4000${apolloServer.graphqlPath}`)
    },
  );
};

main();
