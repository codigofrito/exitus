/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('pessoa', [{
			cpf: 79856412367,
			nome: 'leonardo',
			sobrenome: 'leôncio',
			data_nascimento: '1996-07-28',
			email: 'nleo@mail.com',
			celular: '73966458736',
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
		{
			cpf: 79310245978,
			nome: 'beatriz',
			sobrenome: 'leôncio',
			data_nascimento: '1998-03-25',
			email: 'nbia@mail.com',
			celular: '73966458799',
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
		{
			cpf: 79313049781,
			nome: 'nilzete',
			sobrenome: 'nascimento',
			data_nascimento: '1969-07-09',
			email: 'zete@mail.com',
			celular: '73966470799',
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
		{
			cpf: 12345678900,
			nome: 'márcio',
			sobrenome: 'santos',
			data_nascimento: '1969-07-18',
			email: 'marcio@mail.com',
			celular: '73966400799',
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('pessoa', null, {});
	}
};
