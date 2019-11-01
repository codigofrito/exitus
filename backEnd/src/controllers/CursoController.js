const {
	curso
} = require('../models');
const color = require('colors');

module.exports = {

	async index(request, response) {
		let registros = await curso.findAll({
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

		let registro = await curso.findOne({
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
			id_filial,
			nome_curso,
			area,
		} = request.body;

		let novoRegistro = await curso.create({
			id_filial,
			nome_curso,
			area,
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

		await curso.destroy({
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
			id_filial,
			nome_curso,
			area,
		} = request.body;

		await curso.update({
			id_filial,
			nome_curso,
			area,
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