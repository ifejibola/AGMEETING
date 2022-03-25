const { Sequelize, DataTypes } = require("sequelize");
const db = require("../../config/db");

const Participant = db.define(
  "participant",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    meetingId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isMod: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    moderatorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

// `sequelize.define` also returns the model
console.log(Participant === db.models.Participant); // true

module.exports = Participant;
