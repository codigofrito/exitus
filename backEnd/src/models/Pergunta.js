'use strict';
module.exports = (sequelize, DataTypes) => {
  const pergunta = sequelize.define('pergunta', {
    id_entrevista: DataTypes.INTEGER,
    pergunta: DataTypes.STRING
  }, {});
  pergunta.associate = function (models) {
    pergunta.belongsTo(models.entrevista, {
      foreignKey: 'id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    })
  };
  return pergunta;
};