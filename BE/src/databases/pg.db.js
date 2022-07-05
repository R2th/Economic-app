const { Sequelize } = require("sequelize");
const { user, host, database, password, port } = require("../config/db");

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: "postgres",
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
