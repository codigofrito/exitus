/* eslint-disable no-unused-vars */
'use strict';
module.exports = (sequelize, DataTypes) => {
	const view_moderador = sequelize.define('view-moderador', {
		cpf: DataTypes.BIGINT(11).ZEROFILL,
		nome: DataTypes.STRING,
		sobrenome: DataTypes.STRING,
		data_nascimento: DataTypes.DATEONLY,
		idade: DataTypes.INTEGER,
		email: DataTypes.STRING,
		celular: DataTypes.STRING,
	}, {
		freezeTableName: true
	});
	view_moderador.associate = function(models) {
		// associations can be defined here
	};
	return view_moderador;
};