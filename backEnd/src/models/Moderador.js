'use strict';
module.exports = (sequelize, DataTypes) => {
	const moderador = sequelize.define('moderador', {
		cpf: {
			type: DataTypes.BIGINT(11).ZEROFILL,
			primaryKey: true,
		},
		id_filial: DataTypes.INTEGER,
		senha: DataTypes.STRING
	}, {});
	moderador.associate = function (models) {
		moderador.belongsTo(models.filial, {
			foreignKey: 'id_filial',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});

		moderador.belongsTo(models.pessoa, {
			foreignKey: 'cpf',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
	};
	return moderador;
};