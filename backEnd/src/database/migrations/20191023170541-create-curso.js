/* eslint-disable no-unused-vars */
'use strict'
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
        type: Sequelize.ENUM(['EXATAS', 'HUMANAS', 'SAÚDE'])
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('curso')
  }
}
