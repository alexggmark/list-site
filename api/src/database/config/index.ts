require("dotenv").config()

export const config = {
  development: {
    username: "alex",
    password: process.env.DBPASSWORD,
    database: "list_dev",
    host: "localhost",
    dialect: "mysql" as const,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  production: {
    host: process.env.host,
    username: "alex",
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    logging: false,
    dialect: "mysql" as const,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
}