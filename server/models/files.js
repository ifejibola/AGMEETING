const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = require("../config/db");

const files = sequelize.define(
  "files",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    file_loc: {
      type: Sequelize.STRING,
    },
    comment: {
      type: Sequelize.STRING,
    },
  },
  {
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
  }
);

module.exports = files;
