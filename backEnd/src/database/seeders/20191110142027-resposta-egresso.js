/* eslint-disable linebreak-style */
'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('resposta_egresso', [{
			cpf_egresso: 12345678900,
			id_pergunta: 1,
			id_alternativa: 1,
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
		{
			cpf_egresso: 12345678900,
			id_pergunta: 2,
			id_alternativa: 2,
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		}], {});
	},

	down: (queryInterface) => {
		return queryInterface.bulkDelete('resposta_egresso', null, {});
	}
};
