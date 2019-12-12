/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
'use strict';
module.exports = (sequelize, DataTypes) => {
	const filial = sequelize.define('filial', {
		id: {primaryKey: true, type: DataTypes.INTEGER},
		nome_filial: DataTypes.STRING,
		estado: DataTypes.STRING,
		cidade: DataTypes.STRING
	}, {});
	filial.associate = function(models) {
		// associations can be defined here
	};
	return filial;
};