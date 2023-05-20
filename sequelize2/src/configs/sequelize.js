const env = require("dotenv");
const Sequelize = require("sequelize");
env.config();

const port = process.env.PORT;
const host = process.env.HOST;
const username = process.env.USERNAME;
const password = process.env.USERPASSWORD;
const database = process.env.DATABASE;

const path = `mysql://${username}:${password}@${host}:${port}/${database}`;
const sequelize = new Sequelize(path, { operatorsAliases: false });

// when i check db is connected?
function authenticate() {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection established successfully.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
    .finally(() => {
      sequelize.close();
    });
};

module.exports = { sequelize, Sequelize }