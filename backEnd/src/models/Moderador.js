'use strict';
module.exports = (sequelize, DataTypes) => {
  const moderador = sequelize.define('moderador', {
    cpf: DataTypes.BIGINT(11).ZEROFILL,
    id_filial: DataTypes.INTEGER,
    senha: DataTypes.STRING
  }, {});
  moderador.associate = function (models) {
    moderador.belongsTo(models.filial, {
      foreignKey: 'id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return moderador;
};