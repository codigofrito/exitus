const {
	alternativa
} = require('../models');
const color = require('colors');

module.exports = {

	async index(request, response) {
		let registros = await alternativa.findAll({
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

	async show(request, response) {
		const {
			id
		} = request.body;

		let registro = await alternativa.findOne({
			where: {
				id
			},
			raw: true
		}).then((resultado) => {
			console.log(color.green('Operação executada com sucesso =D'));
			return resultado;
		}).catch((err) => {
			console.log(err);
			console.log(color.red('Falha ao executar operação =O'));
			return [];
		});

		return response.status(200).json(registro);
	},

	async store(request, response) {
		const {
			id_pergunta,
			alternativa,
			objetiva,
		} = request.body;

		let novoRegistro = await alternativa.create({
			id_pergunta,
			alternativa,
			objetiva,
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

		await alternativa.destroy({
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
			alternativa,
			objetiva,
		} = request.body;

		await alternativa.update({
			id_pergunta,
			alternativa,
			objetiva,
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