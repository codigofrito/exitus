/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */

module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable('egresso', {
		cpf: {
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'pessoa',
				key: 'cpf'
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
			type: Sequelize.BIGINT(11).ZEROFILL
		},
		senha: {
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
	}),
	down: (queryInterface, Sequelize) => queryInterface.dropTable('egresso')
};
