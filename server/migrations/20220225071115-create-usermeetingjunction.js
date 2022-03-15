'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('usermeetingjunction', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            meeting_id: {
                type: Sequelize.INTEGER,
                references: {
                    model:{
                        tableName: 'meeting'
                    },
                    key: 'id'
                }
            },
            user_id: {
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
        await queryInterface.dropTable('usermeetingjunctions');
    }
};