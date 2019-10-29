'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Egresso_particiou_entrevista', {
      id_entrevista: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      cpf_egresso: {
        primaryKey: true,
        allowNull: false,
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
    },{
      freezeTableName: true
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Egresso_particiou_entrevista');
  }
};