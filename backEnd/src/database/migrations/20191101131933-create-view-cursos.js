/* eslint-disable linebreak-style */
'use strict';
const config = require('../../config/database.js');
module.exports = {
	up: (queryInterface, Sequelize) => {
		const sequelize = new Sequelize(config);
		return sequelize.query(`
            CREATE OR REPLACE VIEW cursos AS
            SELECT 
                c.id, c.nome_curso, c.area, f.nome_filial, c.created_at, c.updated_at
            FROM
                curso as c,
                filial as f,
                
            WHERE
                c.id_filial = f.id`);
	},

	down: (queryInterface, Sequelize) => {
		const sequelize = new Sequelize(config);
		return sequelize.query('DROP VIEW IF EXISTS cursos');
	}
};
