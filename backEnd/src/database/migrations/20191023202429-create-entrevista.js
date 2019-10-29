'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('entrevista', {
      id: {
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cpf_moderador: {
        allowNull: false,
        references: {
          model: 'moderador',
          key: 'cpf'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        type: Sequelize.STRING
      },
      titulo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      descricao: {
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
    }, {
      freezeTableName: true
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('entrevista');
  }
};