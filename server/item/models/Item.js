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
    meeting_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    issue_number: {
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
    vote_for: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    vote_against: {
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
