'use strict';
const config = require('../../config/database.js')
module.exports = {
  up: (queryInterface, Sequelize) => {
    const sequelize = new Sequelize(config)
    return sequelize.query(`
    CREATE VIEW view_egresso AS
    SELECT 
        p.cpf AS cpf,
        p.nome AS nome,
        p.sobrenome AS sobrenome,
        p.data_nascimento AS data_nascimento,
        p.idade AS idade,
        p.email AS email,
        p.celular AS celular,
        e.createdAt AS createdAt,
        e.updatedAt AS updatedAt
    FROM
        (egresso as e
        JOIN pessoa as p)
    WHERE
        p.cpf = e.cpf`);
  },
  down: (queryInterface, Sequelize) => {
    const sequelize = new Sequelize(config)
    return sequelize.query('DROP VIEW view_egresso')
  }
};