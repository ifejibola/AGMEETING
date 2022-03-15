'use strict';

const {DataTypes, Sequelize} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("company", {
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
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("company");
  }
};
