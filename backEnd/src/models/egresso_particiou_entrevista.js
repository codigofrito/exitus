'use strict';
module.exports = (sequelize, DataTypes) => {
  const egresso_particiou_entrevista = sequelize.define('Egresso_particiou_entrevista', {
    id_entrevista: DataTypes.STRING,
    cpf_egresso: DataTypes.STRING
  }, {});
  egresso_particiou_entrevista.associate = function(models) {
    // associations can be defined here
  };
  return egresso_particiou_entrevista;
};