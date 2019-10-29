'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pessoa', [{
        cpf: '123456789',
        nome: 'leonardo',
        sobrenome: 'leôncio',
        data_nascimento: '1996-07-28',
        email: 'nleo@mail.com',
        celular: '73988992345',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      },
      {
        cpf: '987456321',
        nome: 'Carla',
        sobrenome: 'Silva',
        data_nascimento: '1996-10-29',
        email: 'mail@mail.com',
        celular: '739898989',
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pessoa', null, {});
  }
};