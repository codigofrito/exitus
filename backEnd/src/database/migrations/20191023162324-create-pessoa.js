'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pessoa', {
      cpf: {
        allowNull: false,
        unique: true,
        primaryKey:true,
        type: Sequelize.STRING,
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      freezeTableName: true
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pessoa');
  }
};