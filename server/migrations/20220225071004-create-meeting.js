'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meeting', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      moderator_id: {
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
      time_start: {
        type: Sequelize.DATE
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