import { Query, Resolver, Arg, Mutation, createUnionType } from "type-graphql";
import { Test } from "../models";

@Resolver()
export class Resolvers {
  @Query(() => [ Test ])
  async allTest(): Promise<Test[]> {
    return await Test.find();
  }
}