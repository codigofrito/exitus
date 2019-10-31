'use strict';
module.exports = (sequelize, DataTypes) => {
  const pessoa = sequelize.define('pessoa', {
    cpf: {type:DataTypes.BIGINT(11).ZEROFILL, primaryKey: true},
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    data_nascimento: DataTypes.DATEONLY,
    idade: DataTypes.INTEGER,
    email: DataTypes.STRING,
    celular: DataTypes.STRING,
  }, {
    freezeTableName: true,
    timestamp: true
  });
  pessoa.associate = function(models) {
    
  };
  return pessoa;
};