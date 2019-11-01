/* eslint-disable linebreak-style */
'use strict';

module.exports = (sequelize, DataTypes) => {
	const alternativa = sequelize.define('alternativa', {
		id_pergunta: DataTypes.INTEGER,
		alternativa: DataTypes.STRING
	}, {});
	alternativa.associate = function (models) {
		alternativa.belongsTo(models.pergunta, {
			foreignKey: 'id',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE'
		});
	};
	return alternativa;
};
