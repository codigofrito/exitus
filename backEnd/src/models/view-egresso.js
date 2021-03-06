'use strict';
module.exports = (sequelize, DataTypes) => {
  const view_egresso = sequelize.define('view_egresso', {
    cpf: DataTypes.STRING,
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    data_nascimento: DataTypes.DATEONLY,
    idade: DataTypes.INTEGER,
    email: DataTypes.STRING,
    celular: DataTypes.STRING,
  }, {
    freezeTableName: true
  });
  view_egresso.associate = function(models) {
    // associations can be defined here
  };
  return view - egresso;
};