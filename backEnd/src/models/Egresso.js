'use strict';
module.exports = (sequelize, DataTypes) => {
  const egresso = sequelize.define('egresso', {
    cpf: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    senha: DataTypes.STRING
  }, {});
  egresso.associate = function (models) {
    egresso.belongsTo(models.pessoa, {
      foreignKey: 'cpf',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return egresso;
};