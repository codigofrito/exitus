/* eslint-disable no-unused-vars */
'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('egresso_participou_entrevista', {
			id_entrevista: {
				primaryKey: true,
				allowNull: false,
				type: Sequelize.STRING
			},
			cpf_egresso: {
				primaryKey: true,
				allowNull: false,
				type: Sequelize.BIGINT(11).ZEROFILL
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('egresso_participou_entrevista');
	}
};
