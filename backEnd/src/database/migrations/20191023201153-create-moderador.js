/* eslint-disable no-unused-vars */
'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('moderador', {
			cpf: {
				allowNull: false,
				unique: true,
				primaryKey: true,
				references: {
					model: 'pessoa',
					key: 'cpf'
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
				type: Sequelize.BIGINT(11).ZEROFILL
			},
			id_filial: {
				allowNull: false,
				references: {
					model: 'filial',
					key: 'id'
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
				type: Sequelize.INTEGER
			},
			senha: {
				allowNull: false,
				type: Sequelize.STRING
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
		return queryInterface.dropTable('moderador');
	}
};
