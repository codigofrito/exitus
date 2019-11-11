/* eslint-disable linebreak-style */
'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('egresso_participou_entrevista', [{
			id_entrevista: 1,
			cpf_egresso: 12345678900,
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		}], {});
	},

	down: (queryInterface) => {
		return queryInterface.bulkDelete('egresso_participou_entrevista', null, {});
	}
};
