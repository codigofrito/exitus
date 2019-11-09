/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('filial', [{
			nome_filial: 'FTC - Iabuna',
			estado: 'BA',
			cidade: 'Itabuna',
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
		{
			nome_filial: 'FTC - Ilhéus',
			estado: 'BA',
			cidade: 'Ilhéus',
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('filial', null, {});
	}
};
