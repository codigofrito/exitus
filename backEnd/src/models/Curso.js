/* eslint-disable linebreak-style */
'use strict';
module.exports = (sequelize, DataTypes) => {
	const curso = sequelize.define('curso', {
		id: {type: DataTypes.INTEGER, primaryKey: true},
		id_filial: DataTypes.INTEGER,
		nome_curso: DataTypes.STRING,
		area: DataTypes.STRING
	}, {});
	curso.associate = function (models) {
		curso.belongsTo(models.filial, {
			foreignKey: 'id_filial',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE'
		});
	};
	return curso;
};
