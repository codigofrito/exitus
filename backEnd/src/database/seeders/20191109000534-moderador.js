/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
'use strict';
//const bcrypt = require('bcryptjs');

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('moderador', [{
			cpf: 79856412367,
			id_filial: 1,
			senha: '123',
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
		{
			cpf: 79313049781,
			id_filial: 1,
			senha: '123',
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('moderador', null, {});
	}
};
