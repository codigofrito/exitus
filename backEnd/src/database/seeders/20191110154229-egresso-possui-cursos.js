/* eslint-disable linebreak-style */
'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('egresso_possui_cursos', [{
			cpf_egresso: 79310245978,
			id_curso: 1,
			concluiu: true,
			impressao:'POSITIVA',
			observacao: '',
			atuacao:'ATUOU',
			ano_inicio_curso: 2010,
			ano_termino_curso: 2014,
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
		{
			cpf_egresso: 79310245978,
			id_curso: 2,
			concluiu: true,
			impressao:'POSITIVA',
			observacao: '',
			atuacao:'ATUOU',
			ano_inicio_curso: 2010,
			ano_termino_curso: 2014,
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		}], {});

	},

	down: (queryInterface) => {
		return queryInterface.bulkDelete('egresso_possui_cursos)', null, {});
	}
};
