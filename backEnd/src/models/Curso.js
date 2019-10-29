'use strict';
module.exports = (sequelize, DataTypes) => {
  const curso = sequelize.define('curso', {
    nome_curso: DataTypes.STRING,
    area: DataTypes.STRING
  }, {});
  curso.associate = function (models) {
    curso.belongsTo(models.filial, {
      foreignKey: 'id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    })
  };
  return curso;
};