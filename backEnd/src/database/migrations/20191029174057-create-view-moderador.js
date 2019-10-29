'use strict';
const config = require('../../config/database.js')
module.exports = {
  up: (queryInterface, Sequelize) => {
    const sequelize = new Sequelize(config)
    return sequelize.query(`
    CREATE VIEW view_moderador AS
    SELECT 
        p.cpf AS cpf,
        p.nome AS nome,
        p.sobrenome AS sobrenome,
        p.data_nascimento AS data_nascimento,
        p.idade AS idade,
        p.email AS email,
        p.celular AS celular,
        m.createdAt AS createdAt,
        m.updatedAt AS updatedAt
    FROM
        (moderador as m
        JOIN pessoa as p)
    WHERE
        p.cpf = m.cpf`);
  },
  down: (queryInterface, Sequelize) => {
    const sequelize = new Sequelize(config)
    return sequelize.query('DROP VIEW view_egresso')
  }
};