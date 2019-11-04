/* eslint-disable linebreak-style */
'use strict';
const config = require('../../config/database.js');
module.exports = {
	up: (queryInterface, Sequelize) => {
		const sequelize = new Sequelize(config);
		return sequelize.query(`
    CREATE VIEW IF NOT EXISTS view_resposta_egresso AS 
    SELECT
        ROW_NUMBER() OVER (ORDER BY egresso.cpf) as id,
        egresso.cpf AS cpf_egresso,
        entrevista.id AS id_entrevista,
        entrevista.titulo AS titulo_entrevista,
        pergunta.pergunta AS pergunta_entrevista,
        alternativa.alternativa AS resposta_objetiva,
        resposta_egresso.resposta_subjetiva AS resposta_subjetiva,
        resposta_egresso.created_at,
        resposta_egresso.updated_at
    FROM
        egresso,
        entrevista,
        pergunta,
        alternativa,
        resposta_egresso
    WHERE
        resposta_egresso.cpf_egresso = egresso.cpf
    AND
        pergunta.id_entrevista = entrevista.id
    AND
        resposta_egresso.id_pergunta = pergunta.id
    AND
        resposta_egresso.id_alternativa = alternativa.id`);
	},

	down: (queryInterface, Sequelize) => {
		const sequelize = new Sequelize(config);
		return sequelize.query('DROP VIEW IF EXISTS view_resposta_egresso');
	}
};
