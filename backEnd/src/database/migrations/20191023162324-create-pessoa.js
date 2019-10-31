'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pessoa', {
      cpf: {
        allowNull: false,
        unique: true,
        primaryKey:true,
        type: Sequelize.BIGINT(11).ZEROFILL,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sobrenome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      data_nascimento: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      idade: {
        type: Sequelize.INTEGER
      },
      email: {
        unique: true,
        type: Sequelize.STRING
      },
      celular: {
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
    return queryInterface.dropTable('pessoa');
  }
};