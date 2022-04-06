const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = require("../config/db");

const agenda = sequelize.define(
  "agenda",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    meeting_id: {
      type: Sequelize.STRING,
    },
    item_name: {
      type: Sequelize.STRING,
    },
    file_loc: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    vote_for: {
      type: Sequelize.INTEGER,
    },
    vote_against: {
      type: Sequelize.INTEGER,
    },
    abstain: {
      type: Sequelize.INTEGER,
    },
  },
  {
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
  }
);

module.exports = agenda;
