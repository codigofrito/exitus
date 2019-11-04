const {
	egresso_participou_entrevista
} = require('../models');
const color = require('colors');

module.exports = {

	async index(request, response) {
		let registros = await egresso_participou_entrevista.findAll({
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
			cpf_egresso
		} = request.body;

		let registro = await egresso_participou_entrevista.findOne({
			where: {
				cpf_egresso
			},
			raw: true

		}).then((resultado) => {
			console.log(color.green('Operação executada com sucesso =D'));
			return resultado;
		}).catch((err) => {
			console.log(err);
			console.log(color.red('Falha ao executar operação o_o'));
			return [];
		});

		return response.status(200).json(registro);
	},

	async store(request, response) {
		const {
			id_entrevista,
			cpf_egresso,
		} = request.body;

		let novoRegistro = await egresso_participou_entrevista.create({
			id_entrevista,
			cpf_egresso,

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
			id_entrevista,
			cpf_egresso,
		} = request.body;

		await egresso_participou_entrevista.egresso_participou_entrevista({
			where: {
				id_entrevista,
				cpf_egresso,
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
			id_entrevista,
			cpf_egresso,
		} = request.body;

		await egresso_participou_entrevista.update({
			id_entrevista,
		}, {
			where: {
				cpf_egresso
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