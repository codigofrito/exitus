'use strict';
module.exports = (sequelize, DataTypes) => {
  const egresso_particiou_entrevista = sequelize.define('egresso_particiou_entrevista', {
    id_entrevista: DataTypes.STRING,
    cpf_egresso: DataTypes.BIGINT(11).ZEROFILL
  }, {});
  egresso_particiou_entrevista.associate = function(models) {
    // associations can be defined here
  };
  return egresso_particiou_entrevista;
};