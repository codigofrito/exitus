'use strict';
module.exports = (sequelize, DataTypes) => {
  const view_Egresso_particiou_entrevista = sequelize.define('view_Egresso_particiou_entrevista', {
    id_entrevista: DataTypes.INTEGER,
    titulo_entrevista: DataTypes.STRING,
    cpf_egresso: DataTypes.STRING,
    nome_egresso: DataTypes.STRING,
    sobrenome_egresso: DataTypes.STRING,
    data_nascimento_egresso: DataTypes.DATE,
    email_egresso: DataTypes.STRING,
    celular_egresso: DataTypes.STRING,
    idade_egresso: DataTypes.INTEGER,
    data_participacao: DataTypes.DATE
  }, {});
  view_Egresso_particiou_entrevista.associate = function(models) {
    // associations can be defined here
  };
  return view_Egresso_particiou_entrevista;
};