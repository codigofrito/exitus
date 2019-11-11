/* eslint-disable linebreak-style */
'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
	
		return queryInterface.bulkInsert('curso', [{
			id_filial: 1,
			nome_curso: 'Direito',
			area: 'HUMANAS',
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
		{
			id_filial: 1,
			nome_curso: 'Nutrição',
			area: 'SAÚDE',
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		}], {});
	},

	down: (queryInterface) => {
	
		return queryInterface.bulkDelete('People', null, {});
	}
};
