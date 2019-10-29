'use strict';
const config = require('../../config/database.js')
module.exports = {
  up: (queryInterface, Sequelize) => {
    const sequelize = new Sequelize(config)
    return sequelize.query(`CREATE VIEW entrevista_egresso AS 
        SELECT e.id as id_entrevista, e.titulo as titulo_entrevista, 
          p.cpf as cpf_egresso, p.nome as nome_egresso, p.sobrenome as sobrenome_egresso,
          p.data_nascimento as data_nascimento_egresso, p.email as email_egresso,
          p.celular as celular_egresso, epe.createdAt as data_participacao
        FROM entrevista as e, pessoa as p, egresso_particiou_entrevista as epe
        WHERE e.id = epe.id_entrevista AND p.cpf = epe.cpf_egresso`);
  },
  down: (queryInterface, Sequelize) => {
    const sequelize = new Sequelize(config)
    return sequelize.query('DROP VIEW entrevista_egresso')
  }
};