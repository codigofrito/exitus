/* eslint-disable linebreak-style */
'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('pergunta', [{
			id_entrevista: 1,
			pergunta: 'Pergunta teste 1',
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
		{
			id_entrevista: 1,
			pergunta: 'Pergunta teste 2',
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		}], {});
	},

	down: (queryInterface) => {
		return queryInterface.bulkDelete('pergunta', null, {});
	}
};
