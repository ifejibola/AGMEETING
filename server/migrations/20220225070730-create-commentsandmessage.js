'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('commentandmessage', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      sender_id: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: 'client'
          },
          key: 'id'
        }
      },
      date_created: {
        type: Sequelize.DATE
      },
      text: {
        type: Sequelize.STRING
      },
      receiver_id: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: 'client'
          },
          key: 'id'
        }
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
    await queryInterface.dropTable('commentsandmessage');
  }
};