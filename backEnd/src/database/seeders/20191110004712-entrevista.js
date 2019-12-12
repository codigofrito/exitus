/* eslint-disable linebreak-style */
'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
   
		return queryInterface.bulkInsert('entrevista', [{
			cpf_moderador: 79856412367,
			titulo: 'Primeira entrevista',
			descricao: 'Entrevista de teste',
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
		{
			cpf_moderador: 79856412367,
			titulo: 'Primeira entrevista',
			descricao: 'Entrevista de teste',
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		}], {});
	},

	down: (queryInterface) => {

		return queryInterface.bulkDelete('entrevista', null, {});

	}
};
