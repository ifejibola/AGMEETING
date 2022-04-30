'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('usermeetingjunction', {
            meetingId: {
                type: Sequelize.INTEGER,
                references: {
                    model:{
                        tableName: 'meeting'
                    },
                    key: 'id'
                    ,
                },
                primaryKey: true,
            },
            clientId: {
                type: Sequelize.INTEGER,
                references: {
                    model:{
                        tableName: 'client'
                    },
                    key: 'id'
                },
                primaryKey: true,
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
        await queryInterface.dropTable('usermeetingjunctions');
    }
};