'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('curso', {
      id: {
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_filial: {
        allowNull: false,
        references: {
          model: 'filial',
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      nome_curso: {
        type: Sequelize.STRING
      },
      area: {
        type: Sequelize.ENUM(['EXATAS','HUMANAS','SAÚDE',])
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
    return queryInterface.dropTable('curso');
  }
};