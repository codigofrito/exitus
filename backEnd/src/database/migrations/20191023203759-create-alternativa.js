/* eslint-disable no-unused-vars */
'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('alternativa', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			id_pergunta: {
				allowNull: false,
				references: {
					model: 'pergunta',
					key: 'id'
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
				type: Sequelize.INTEGER
			},
			alternativa: {
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
		return queryInterface.dropTable('alternativa');
	}
};
