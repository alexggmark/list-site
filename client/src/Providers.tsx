import React from "react";
import { client } from "./apollo";
import { ApolloProvider } from "@apollo/client";

interface ProviderProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}