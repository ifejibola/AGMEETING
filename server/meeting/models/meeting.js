const { Sequelize, DataTypes } = require("sequelize");
const db = require("../../config/db");

const Meeting = db.define(
  "meeting",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    mod_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

// `sequelize.define` also returns the model
console.log(Meeting === db.models.Meeting); // true

module.exports = Meeting;
