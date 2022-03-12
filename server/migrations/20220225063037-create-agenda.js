'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Agendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING
      },
      meeting_id: {
        type: Sequelize.STRING
      },
      item_name: {
        type: Sequelize.STRING
      },
      file_loc: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      vote_for: {
        type: Sequelize.INTEGER
      },
      vote_against: {
        type: Sequelize.INTEGER
      },
      abstain: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Agendas');
  }
};