import { createConnection } from "typeorm";
import { Test, Users } from "../models";

export const init_db = async () => {
  const connection = await createConnection();
  await connection.dropDatabase();
  await connection.synchronize();

  const col1 = new Test();
  col1.name = "Test Data 1";
  await col1.save();

  const col2 = new Test();
  col2.name = "Test Data 2";
  await col2.save();

  const col3 = new Test();
  col3.name = "Test Data 3";
  await col3.save();

  const user1 = new Users();
  user1.username = "alex";
  user1.password = "$2y$12$QX.l3YTwbNBfwqfa28ReQ.Ca8xCMvl4ZMQ60u10yjB1y49QK1pH/.";
  await user1.save();
}