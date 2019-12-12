/* eslint-disable linebreak-style */
'use strict';
module.exports = (sequelize, DataTypes) => {
	const cursos = sequelize.define('cursos', {
		id: DataTypes.INTEGER,
		nome_curso: {unique: false, primaryKey: true, type: DataTypes.STRING},
		area: DataTypes.STRING,
		nome_filial: DataTypes.STRING,
	}, {});
	cursos.associate = function (models ) {
	};
	return cursos;
};
