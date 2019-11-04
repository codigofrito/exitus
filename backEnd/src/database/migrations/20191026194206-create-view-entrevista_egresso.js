'use strict';
const config = require('../../config/database.js');
module.exports = {
	up: (queryInterface, Sequelize) => {
		const sequelize = new Sequelize(config);
		return sequelize.query(`
    CREATE VIEW IF NOT EXISTS entrevista_egresso AS 
    SELECT
        ROW_NUMBER() OVER (ORDER BY pessoa.cpf) as id,
        entrevista.id as id_entrevista,
        entrevista.titulo as titulo_entrevista, 
        pessoa.cpf as cpf_egresso,
        pessoa.nome as nome_egresso,
        pessoa.sobrenome as sobrenome_egresso,
        pessoa.data_nascimento as data_nascimento_egresso,
        pessoa.email as email_egresso,
        pessoa.celular as celular_egresso,
        egresso_participou_entrevista.created_at as data_participacao
    FROM
        entrevista, pessoa, egresso_participou_entrevista
    WHERE
        entrevista.id = egresso_participou_entrevista.id_entrevista
    AND
        pessoa.cpf = egresso_participou_entrevista.cpf_egresso`);
	},
	down: (queryInterface, Sequelize) => {
		const sequelize = new Sequelize(config);
		return sequelize.query('DROP VIEW IF EXISTS entrevista_egresso');
	}
};
