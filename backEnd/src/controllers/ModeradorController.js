const {
	moderador
} = require('../models');
const color = require('colors');

module.exports = {

	async index(request, response) {
		let registros = await moderador.findAll({
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
			cpf
		} = request.body;

		let registro = await moderador.findOne({
			where: {
				cpf
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
			cpf,
			id_filial,
			senha,
		} = request.body;

		let novoRegistro = await moderador.create({
			cpf,
			id_filial,
			senha,
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
			cpf
		} = request.body;

		await moderador.destroy({
			where: {
				cpf
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
			cpf,
			id_filial,
			senha,
		} = request.body;

		await moderador.update({
			cpf,
			id_filial,
			senha,
		}, {
			where: {
				cpf
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