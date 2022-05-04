'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('client', [{
      client_name: 'Yae',
      email: '1@gmail.com',
      password: 'p1',
      company_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      role: 'admin'
    },
      {
        client_name: 'Ei',
        email: '2@gmail.com',
        password: 'p1',
        company_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        role: 'user'
      },
      {
        client_name: 't5',
        email: 't5@gmail.com',
        password: 'p5',
        company_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        role: 'moderator'
      }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
