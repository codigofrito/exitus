'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('alternativa', {
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
      alternativa: {
        allowNull: false,
        type: Sequelize.STRING
      },
      objetiva: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: 1
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
    return queryInterface.dropTable('alternativa');
  }
};