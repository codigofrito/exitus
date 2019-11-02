const faker = require('faker');
const { queryInterface, Sequelize } = require('./db');
const registros = 300;
let successes = 0;

module.exports.registros = registros;
module.exports.generate = async () => {
	return new Promise((resolve, reject) => {
		if (registros > 0) {
			for (let i = 0; i < registros; i++) {
				queryInterface.bulkInsert('egresso_participou_entrevista', [{
					id_entrevista: faker.random.number(300),
					cpf_egresso: faker.random.number(300),
					created_at: Sequelize.fn('NOW'),
					updated_at: Sequelize.fn('NOW')
				}]).then(function () {
					successes++;
					if (i == registros - 1) {
						resolve(successes);
					}
				}).catch(() => {
					if (i == registros - 1) {
						resolve(successes);
					}
				});
			}
		} else {
			reject('');
		}
	});
};

module.exports.clear = async () => {
	queryInterface.bulkDelete('egresso_participou_entrevista');
};