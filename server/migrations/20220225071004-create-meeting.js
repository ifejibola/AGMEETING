'use strict';
const {DataTypes, Sequelize} = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meeting', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mod_id: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: 'client'
          },
          key: 'id'
        }
      },
      admin_id: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: 'client'
          },
          key: 'id'
        }
      },
      company_id: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: 'company'
          },
          key: 'id'
        }
      },
      time_start: {
        allowNull: false,
        type: Sequelize.DATE
      },
      time_end: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meeting');
  }
};