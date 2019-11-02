const color = require('colors');
const faker = require('faker');
const { queryInterface, Sequelize } = require('./db');
const registros = 300;
let successes = 0;

module.exports.registros = registros;
module.exports.generate = async () => {
	return new Promise((resolve, reject) => {
		if(registros > 0) {
			console.log(color.yellow(`GERANDO ${registros} ${registros > 1 ? 'REGISTROS' : 'REGISTRO'} PARA A TABELA "pessoa"`));
			setTimeout(() => {
				for (let i = 0; i < registros; i++) {
					queryInterface.bulkInsert('pessoa', [{
						cpf: faker.random.number(),
						nome: faker.name.firstName(),
						sobrenome: faker.name.lastName(),
						data_nascimento: faker.date.past(),
						email: faker.internet.email(),
						celular: faker.phone.phoneNumber(),
						created_at: Sequelize.fn('NOW'),
						updated_at: Sequelize.fn('NOW')
					}]).then(function () {
						successes++;
						if(i == registros -1) {
							resolve(successes);
						}
					}).catch(() => {
						console.log(color.red('Erro ao criar registro...'));
					});
				}
			}, 1500);
		} else {
			reject ('');
		}
	});
};