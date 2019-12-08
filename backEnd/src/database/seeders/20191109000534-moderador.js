'use strict';
//const bcrypt = require('bcryptjs');
const password = require('./scripts/password');
console.log(typeof password);

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('moderador', [{
			cpf: 79856412367,
			id_filial: 1,
			senha: password,
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
		{
			cpf: 79313049781,
			id_filial: 1,
			senha: password,
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		}], {});
	},

	down: (queryInterface) => {
		return queryInterface.bulkDelete('moderador', null, {});
	}
};
