import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const dialectOptions = {};

if (process.env.DB_SSL === "true") {
  dialectOptions.ssl = {
    ca: fs.readFileSync(path.resolve("certs/ca.pem")).toString(),
  };
}

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false,
    dialectOptions: {
      connectTimeout: 10000,
    },
  }
);

export default sequelize;
