const {
	resposta_egresso
} = require('../models');
const color = require('colors');

module.exports = {

	async index(request, response) {
		let registros = await resposta_egresso.findAll({
			raw: true
		}).then((resultado) => {
			console.log(color.green('Operação executada com sucesso *-*'));
			return resultado;
		}).catch((err) => {
			console.log(err);
			console.log(color.red('Falha ao executar operação =/'));
			return [];
		});

		return response.status(200).json(registros);
	},

	async store(request, response) {
		const {
			id_pergunta,
			id_alternativa,
			cpf_egresso,
			resposta_subjetiva,
		} = request.body;

		let novoRegistro = await resposta_egresso.create({
			id_pergunta,
			id_alternativa,
			cpf_egresso,
			resposta_subjetiva,
		}).then((resultado) => {
			console.log(color.green('Operação executada com sucesso =D'));
			return resultado;
		}).catch((err) => {
			console.log(err);
			console.log(color.red('Falha ao executar operação =O'));
			return [];
		});

		return response.status(200).json(novoRegistro);
	},

	async destroy(request, response) {
		const {
			id
		} = request.body;

		await resposta_egresso.destroy({
			where: {
				id
			},
			raw: true
		}).then((resultado) => {
			console.log(color.green('Operação executada com sucesso ^^'));
			return resultado;
		}).catch((err) => {
			console.log(err);
			console.log(color.red('Falha ao executar operação =O'));
			return [];
		});

		return response.status(200).json(request.body);
	},

	async update(request, response) {
		const {
			id,
			id_pergunta,
			id_alternativa,
			cpf_egresso,
			resposta_subjetiva,
		} = request.body;

		await resposta_egresso.update({
			id,
			id_pergunta,
			id_alternativa,
			cpf_egresso,
			resposta_subjetiva,
		}, {
			where: {
				id
			}
		}).then((resultado) => {
			console.log(color.green('Operação executada com sucesso *-*'));
			return resultado;
		}).catch((err) => {
			console.log(err);
			console.log(color.red('Falha ao executar operação =/'));
			return [];
		});

		return response.status(200).json(request.body);
	},
};