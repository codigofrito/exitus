/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
'use strict';
const password = require('./scripts/password');
console.log(typeof password);

module.exports = {
	up: async (queryInterface, Sequelize) => {
		//let hash = await bcrypt.hashSync(123456, 10);
		//console.log(hash);
		
		return queryInterface.bulkInsert('egresso', [{
			cpf: 12345678900,
			senha: password,
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		},
		{
			cpf: 79310245978,
			senha: password,
			created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
			updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
		}], {});
    
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('egresso', null, {});
	}
};
