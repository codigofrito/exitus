'use strict';
module.exports = (sequelize, DataTypes) => {
  const entrevista = sequelize.define('entrevista', {
    cpf_moderador: DataTypes.STRING,
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {});
  entrevista.associate = function (models) {
    entrevista.belongsTo(models.moderador, {
      foreignKey: 'cpf',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return entrevista;
};