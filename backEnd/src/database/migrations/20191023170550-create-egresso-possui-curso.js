'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('egresso_possui_cursos', {
      cpf_egresso: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'egresso',
          key: 'cpf'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        type: Sequelize.STRING
      },
      id_curso: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'curso',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        type: Sequelize.INTEGER
      },
      concluiu: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      impressao: {
        allowNull: false,
        type: Sequelize.ENUM(['POSITIVA', 'NEGATIVA'])
      },
      observacao: {
        type: Sequelize.STRING
      },
      atuacao: {
        allowNull: false,
        type: Sequelize.ENUM(['NUNCA ATUOU', 'ATUOU', 'ATUANDO'])
      },
      ano_inicio_curso: {
        type: Sequelize.INTEGER
      },
      ano_termino_curso: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('egresso_possui_cursos');
  }
};