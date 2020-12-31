import { Sequelize } from "sequelize";
import { config } from "./config";

const env = "development";
const configuration = config[env];

const sequelize = new Sequelize(configuration.database, configuration.username, configuration.password, configuration);

const db = {
  sequelize,
}

export default db;