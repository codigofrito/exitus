'use strict';
module.exports = (sequelize, DataTypes) => {
	const resposta_egresso = sequelize.define('resposta_egresso', {
		id_pergunta: DataTypes.INTEGER,
		id_alternativa: DataTypes.INTEGER,
		cpf_egresso: DataTypes.BIGINT(11).ZEROFILL,
		resposta_subjetiva: DataTypes.STRING
	}, {});
	resposta_egresso.associate = function (models) {
		resposta_egresso.belongsTo(models.pergunta, {
			foreignKey: 'id',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
		resposta_egresso.belongsTo(models.egresso, {
			foreignKey: 'cpf',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
		resposta_egresso.belongsTo(models.alternativa, {
			foreignKey: 'id',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
	};
	return resposta_egresso;
};