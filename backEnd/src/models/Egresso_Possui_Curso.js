'use strict';
module.exports = (sequelize, DataTypes) => {
	const egresso_possui_cursos = sequelize.define('egresso_possui_cursos', {
		cpf_egresso: {
			type: DataTypes.BIGINT(11).ZEROFILL,
			primaryKey: true
		},
		id_curso: {
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
	egresso_possui_cursos.associate = function (models) {
		egresso_possui_cursos.belongsTo(models.egresso, {
			foreignKey: 'cpf_egresso',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
		egresso_possui_cursos.belongsTo(models.curso, {
			foreignKey: 'id_curso',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
	};
	return egresso_possui_cursos;
};