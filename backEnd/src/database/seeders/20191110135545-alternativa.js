/* eslint-disable linebreak-style */
'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('alternativa', [{
			id_pergunta: 1,
			alternativa: 'alternativa 1.1',
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
		{
			id_pergunta: 1,
			alternativa: 'alternativa 1.2',
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
		{
			id_pergunta: 1,
			alternativa: 'alternativa 1.3',
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
		{
			id_pergunta: 2,
			alternativa: 'alternativa 2.1',
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
		{
			id_pergunta: 2,
			alternativa: 'alternativa 2.2',
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		}], {});
	},

	down: (queryInterface) => {
		return queryInterface.bulkDelete('alternativa', null, {});
	}
};
