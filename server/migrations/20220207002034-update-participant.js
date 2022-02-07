'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('Participants', 'meetingId', {
            type: Sequelize.INTEGER,
            allowNull: false
        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('Participants', 'meetingId')
    }
};
