import { ApolloClient, ApolloLink, InMemoryCache, HttpLink, concat } from "@apollo/client";
import Cookies from "js-cookie";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphl",
  credentials: "include"
});
const authMiddleWare = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: Cookies.get("authToken") || null
    }
  })

  return forward(operation);
})

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  link: concat(authMiddleWare, httpLink),
  credentials: "include"
});