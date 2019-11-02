const faker = require('faker');
const { queryInterface, Sequelize } = require('./db');
const registros = 300;
let successes = 0;

module.exports.registros = registros;
module.exports.generate = async () => {
	return new Promise((resolve, reject) => {
		if(registros > 0) {
			for (let i = 0; i < registros; i++) {
				queryInterface.bulkInsert('egresso_possui_cursos', [{
					cpf_egresso: faker.random.number(1000),
					id_curso: faker.random.number(300),
					concluiu: faker.random.number(1),
					impressao: 'POSITIVA',
					observacao: faker.lorem.text(),
					atuacao: 'ATUOU',
					ano_inicio_curso: faker.random.number(2000, 5),
					ano_termino_curso:faker.random.number(2010, 10),
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
	queryInterface.bulkDelete('egresso_possui_cursos');
};