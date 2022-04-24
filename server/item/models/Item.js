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
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filepath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    votes_for: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    votes_against: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    abstain: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    file_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

console.log(Item === db.models.Item);

module.exports = Item;
