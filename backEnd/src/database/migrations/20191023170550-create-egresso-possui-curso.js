/* eslint-disable no-unused-vars */
'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('egresso_possui_cursos', {
			cpf_egresso: {
				allowNull: false,
				primaryKey: true,
				references: {
					model: 'egresso',
					key: 'cpf'
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
				type: Sequelize.BIGINT(11).ZEROFILL
			},
			id_curso: {
				allowNull: false,
				primaryKey: true,
				references: {
					model: 'curso',
					key: 'id'
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
				type: Sequelize.INTEGER
			},
			concluiu: {
				type: Sequelize.BOOLEAN
			},
			impressao: {
				type: Sequelize.ENUM(['POSITIVA', 'NEGATIVA'])
			},
			observacao: {
				type: Sequelize.STRING
			},
			atuacao: {
				type: Sequelize.ENUM(['NUNCA ATUOU', 'ATUOU', 'ATUANDO'])
			},
			ano_inicio_curso: {
				type: Sequelize.INTEGER
			},
			ano_termino_curso: {
				type: Sequelize.INTEGER
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
		return queryInterface.dropTable('egresso_possui_cursos');
	}
};
