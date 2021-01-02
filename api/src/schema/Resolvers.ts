import { Query, Resolver, Arg, Mutation, Authorized } from "type-graphql";
import { Test } from "../models";

@Resolver()
export class Resolvers {
  @Query(() => [ Test ])
  async allTest(): Promise<Test[]> {
    return await Test.find();
  }

  @Authorized()
  @Query(() => [ Test ])
  async userGetTest(): Promise<Test[]> {
    return await Test.find()
  }

  @Mutation(() => Test)
  async createTest(@Arg("name") name: string): Promise<Test> {
    const newTest = Test.create({ name });
    await newTest.save();
    return newTest;
  }
}