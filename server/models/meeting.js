const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const company = require("./company");
const client = require("./client")

const meeting = sequelize.define(
    "meeting",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        mod_id: {
            type: DataTypes.INTEGER,
        },
        admin_id: {
            type: DataTypes.INTEGER,
        },
        company_id: {
            type: Sequelize.STRING,
        },
        time_start: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        time_end: {
            allowNull: false,
            type: DataTypes.DATE,
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

company.hasMany(meeting, {
    foreignKey: "company_id",
});
meeting.belongsTo(company, {
    foreignKey: "company_id",
});


client.belongsToMany(meeting, {
    through: "usermeetingjunction",
});
meeting.belongsToMany(client, {
    through: "usermeetingjunction",
});

module.exports = meeting;
