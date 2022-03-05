const { Sequelize, DataTypes } = require("sequelize");
const db = require("../../config/db");

const Item = db.define(
  "item",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    meetingid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    issuenum: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filepath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    votefor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    voteagainst: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    abstain: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

console.log(Item === db.models.Item);

module.exports = Item;
