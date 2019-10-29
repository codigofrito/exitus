'use strict';
module.exports = (sequelize, DataTypes) => {
  const Egresso_particiou_entrevista = sequelize.define('Egresso_particiou_entrevista', {
    id_entrevista: DataTypes.STRING,
    cpf_egresso: DataTypes.STRING
  }, {});
  Egresso_particiou_entrevista.associate = function(models) {
    // associations can be defined here
  };
  return Egresso_particiou_entrevista;
};