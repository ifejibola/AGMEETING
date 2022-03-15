const { Sequelize, Model, DataTypes} = require('sequelize');

const sequelize = require('../config/db');

const company = sequelize.define('company', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    company_name: {
        type: Sequelize.STRING,
    },
    address: {
        type: Sequelize.STRING,
    }
},     {
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
})

module.exports = company;

