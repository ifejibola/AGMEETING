const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const company = require("./company");

const client = sequelize.define(
  "client",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    client_name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    company_id: {
      type: Sequelize.STRING,
    },
    role: {
      type: DataTypes.ENUM({
        values: ["admin", "moderator", "user"],
      }),
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
  }
);

company.hasMany(client, {
  foreignKey: "company_id",
});
client.belongsTo(company,  {
    foreignKey: {
        name: "company_id"
    }
});

module.exports = client;
