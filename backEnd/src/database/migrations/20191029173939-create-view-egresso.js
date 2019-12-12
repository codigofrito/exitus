'use strict';
const config = require('../../config/database.js');
module.exports = {
	up: (queryInterface, Sequelize) => {
		const sequelize = new Sequelize(config);
		return sequelize.query(`
    CREATE VIEW IF NOT EXISTS view_egresso AS
    SELECT 
        ROW_NUMBER() OVER (ORDER BY pessoa.cpf) as id,
        pessoa.cpf,
        pessoa.nome ,
        pessoa.sobrenome,
        pessoa.data_nascimento,
        pessoa.email,
        pessoa.celular ,
        egresso.created_at,
        egresso.updated_at
    FROM
        egresso
    JOIN
        pessoa
    ON
        pessoa.cpf = egresso.cpf`);
	},
	down: (queryInterface, Sequelize) => {
		const sequelize = new Sequelize(config);
		return sequelize.query('DROP VIEW IF EXISTS view_egresso');
	}
};
