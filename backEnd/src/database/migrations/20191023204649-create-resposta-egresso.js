'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('resposta_egresso', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pergunta: {
        allowNull: false,
        references: {
          model: 'pergunta',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        type: Sequelize.INTEGER
      },
      id_alternativa: {
        allowNull: false,
        references: {
          model: 'alternativa',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        type: Sequelize.INTEGER
      },
      cpf_egresso: {
        allowNull: false,
        references: {
          model: 'egresso',
          key: 'cpf'
        },
        type: Sequelize.STRING
      },
      resposta_subjetiva: {
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
    return queryInterface.dropTable('resposta_egresso');
  }
};