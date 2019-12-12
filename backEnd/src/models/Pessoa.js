/* eslint-disable no-unused-vars */
'use strict';
module.exports = (sequelize, DataTypes) => {
	const pessoa = sequelize.define('pessoa', {
		cpf: {type:DataTypes.BIGINT(11).ZEROFILL, primaryKey: true},
		nome: DataTypes.STRING,
		sobrenome: DataTypes.STRING,
		data_nascimento: DataTypes.DATEONLY,
		email: DataTypes.STRING,
		celular: DataTypes.STRING,
	}, {
		freezeTableName: true,
		timestamp: true
	});
	pessoa.associate = function(models) {
    
	};
	return pessoa;
};