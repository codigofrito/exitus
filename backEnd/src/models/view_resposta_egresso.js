'use strict';
module.exports = (sequelize, DataTypes) => {
  const view_resposta_egresso = sequelize.define('view_resposta_egresso', {
    cpf_egresso: DataTypes.BIGINT(11).ZEROFILL,
    id_entrevista: DataTypes.INTEGER,
    titulo_entrevista: DataTypes.STRING,
    pergunta_entrevista: DataTypes.STRING,
    resposta_objetiva: DataTypes.STRING,
    resposta_subjetiva: DataTypes.STRING,

  }, {});
  view_resposta_egresso.associate = function(models) {
    // associations can be defined here
  };
  return view_resposta_egresso;
};