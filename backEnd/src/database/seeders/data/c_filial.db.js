const faker = require('faker');
const { queryInterface, Sequelize } = require('./_db');
const registros = 300;
let successes = 0;

module.exports.registros = registros;
module.exports.generate = async () => {
	return new Promise((resolve, reject) => {
		if(registros > 0) {
			for (let i = 0; i < registros; i++) {
				queryInterface.bulkInsert('filial', [{
					nome_filial: faker.company.companyName(),
					estado: faker.address.state(),
					cidade: faker.address.city(),
					created_at: Sequelize.fn('NOW'),
					updated_at: Sequelize.fn('NOW')
				}]).then(function () {
					successes++;
					if(i == registros -1) {
						resolve(successes);
					}
				}).catch(() => {
					if(i == registros -1) {
						resolve(successes);
					}
				});
			}
		} else {
			reject ('');
		}
	});
};

module.exports.clear = async () => {
	queryInterface.bulkDelete('filial');
};