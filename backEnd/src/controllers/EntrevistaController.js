const {
	entrevista
} = require('../models');
const color = require('colors');

module.exports = {

	async index(request, response) {
		let registros = await entrevista.findAll({
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

		let registro = await entrevista.findOne({
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
			cpf_moderador,
			titulo,
			descricao,
		} = request.body;

		let novoRegistro = await entrevista.create({
			cpf_moderador,
			titulo,
			descricao,
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

		await entrevista.destroy({
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
			cpf_moderador,
			titulo,
			descricao,
		} = request.body;

		await entrevista.update({
			cpf_moderador,
			titulo,
			descricao,
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