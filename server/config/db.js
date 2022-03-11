const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  "postgres://postgres:password@localhost:5432/local_agmeeting_database"
);
