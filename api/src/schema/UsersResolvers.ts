import { Field, Resolver, Arg, Mutation, ObjectType } from "type-graphql";
import { Users } from "../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config";

@ObjectType()
class LoginResponse {
  @Field()
  accessToken!: string;
}

@Resolver()
export class UsersResolvers {
  @Mutation(() => Users)
  async createUser(
    @Arg("username") username: string,
    @Arg("password") password: string,
  ): Promise<Users> {
    const hashedPassword = await bcrypt.hash(password, config.passwordHashLength);

    const newUser = Users.create({ username, password: hashedPassword });
    await newUser.save();
    return newUser;
  }

  @Mutation(() => LoginResponse)
  async loginUser(
    @Arg("username") username: string,
    @Arg("password") password: string
  ): Promise<LoginResponse> {
    const user = await Users.findOne({ where: { username } });

    if (!user) {
      throw new Error("Could not find user");
    }

    const verify = bcrypt.compare(password, user.password);

    if (!verify) {
      throw new Error("Passwords don't match");
    }

    return {
      accessToken: jwt.sign({ userId: user.id }, config.jwtSecret)
    }
  }
}