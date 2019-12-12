'use strict';
module.exports = (sequelize, DataTypes) => {
	const egresso_possui_curso = sequelize.define('egresso_possui_curso', {
		cpf_egresso: {
			type: DataTypes.BIGINT(11).ZEROFILL,
			primaryKey: true
		},
		id_curso: {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		id_filial: {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		concluiu: DataTypes.BOOLEAN,
		impressao: DataTypes.STRING,
		observacao: DataTypes.STRING,
		atuacao: DataTypes.STRING,
		ano_inicio_curso: DataTypes.INTEGER,
		ano_termino_curso: DataTypes.INTEGER,
	}, {});
	egresso_possui_curso.associate = function (models) {
		egresso_possui_curso.belongsTo(models.egresso, {
			foreignKey: 'cpf',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
		egresso_possui_curso.belongsTo(models.curso, {
			foreignKey: 'id',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
	};
	return egresso_possui_curso;
};