const {Sequelize, Model, DataTypes} = require("sequelize");
const sequelize = require("../config/db");
const client = require("./client")
const meeting = require("./meeting")

const userMeetingJunction = sequelize.define(
    'usermeetingjunction',
    {
        meeting_id: {
            type: DataTypes.INTEGER,
            references: {
                model: meeting,
                key: 'id'
            },
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: client,
                key: 'id'
            },
            primaryKey: true,
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
    });

module.exports = userMeetingJunction;
