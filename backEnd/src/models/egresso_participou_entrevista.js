/* eslint-disable no-unused-vars */
'use strict';
module.exports = (sequelize, DataTypes) => {
	const egresso_particiou_entrevista = sequelize.define('egresso_participou_entrevista', {
		id_entrevista: {type : DataTypes.STRING, primaryKey :  true},
		cpf_egresso: DataTypes.BIGINT(11).ZEROFILL
	}, {});
	egresso_particiou_entrevista.associate = function (models) {
		// associations can be defined here
	};
	return egresso_particiou_entrevista;
};
