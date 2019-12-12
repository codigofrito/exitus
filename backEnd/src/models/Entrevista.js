'use strict';
module.exports = (sequelize, DataTypes) => {
	const entrevista = sequelize.define('entrevista', {
		cpf_moderador: DataTypes.BIGINT(11).ZEROFILL,
		titulo: DataTypes.STRING,
		descricao: DataTypes.STRING
	}, {});
	entrevista.associate = function (models) {
		entrevista.belongsTo(models.moderador, {
			foreignKey: 'cpf_moderador',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
	};
	return entrevista;
};