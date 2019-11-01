/* eslint-disable no-unused-vars */
'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('filial', {
			id: {
				allowNull: false,
				autoIncrement: true,
				unique: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			nome_filial: {
				allowNull: false,
				type: Sequelize.STRING
			},
			estado: {
				allowNull: false,
				type: Sequelize.STRING
			},
			cidade: {
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
		return queryInterface.dropTable('filial');
	}
};
