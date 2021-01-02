import jwt from "jsonwebtoken";
import config from "../config";
import { AuthChecker } from "type-graphql";

interface AuthInterface {
  isAuth: boolean;
  userId?: string | object | null;
}

export const authServer = ({ req }: any): AuthInterface => {
  const header = req.headers.authorization;

  if (!header) return { isAuth: false }

  const token = header.split(" ")[1];
  const user = jwt.verify(token, config.jwtSecret);

  if (!user) return { isAuth: false }

  return {
    isAuth: true,
    userId: user
  }
}

export const authChecker: AuthChecker<AuthInterface> = ({ root, args, context, info}) => {
  if (context.isAuth) return true;
  return false;
}