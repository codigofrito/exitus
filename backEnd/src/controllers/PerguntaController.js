const Pergunta = require('../models').pergunta;
const Mensagem = require('./mensagem');

module.exports = {

	async index(request, response) {
		await Pergunta.findAll({
			raw: true
		}).then((resultado) => {

			return response.status(200).json({
				resultado,
				registros: resultado.length,
				mensagem: Mensagem.sucesso,
				return: resultado.length != 0 ? true : false
			});
		}).catch(() => {

			return response.status(400).json({
				resultado: [],
				registros: 0,
				mensagem: Mensagem.falha,
				return: false
			});
		});
	},

	async show(request, response) {
		const { id } = request.body;

		await Pergunta.findOne({
			where: { id },
			raw: true
		}).then((resultado) => {

			return response.status(200).json({
				resultado,
				mensagem: Mensagem.sucesso,
				return: resultado !== null ? true : false
			});
		}).catch(() => {

			return response.status(400).json({
				resultado: [],
				mensagem: Mensagem.falha,
				return: false
			});
		});
	},

	async store(request, response) {
		const { id_entrevista, pergunta } = request.body;

		await Pergunta.create({
			id_entrevista,
			pergunta,
		}).then((resultado) => {

			return response.status(200).json({
				resultado,
				mensagem: Mensagem.sucesso,
				return: true
			});
		}).catch(() => {

			return response.status(403).json({
				resultado: [],
				mensagem: Mensagem.falha,
				return: false
			});
		});
	},

	async destroy(request, response) {
		const { id } = request.body;

		await Pergunta.destroy({
			where: { id },
			raw: true
		}).then((resultado) => {

			return response.status(200).json({
				resultado: request.body,
				registros: resultado,
				mensagem: Mensagem.sucesso,
				return: resultado >= 1 ? true : false
			});
		}).catch(() => {

			return response.status(400).json({
				resultado: [],
				registros: 0,
				mensagem: Mensagem.falha,
				return: false
			});
		});
	},

	async update(request, response) {
		const { id, id_entrevista, Pergunta } = request.body;

		await Pergunta.update({
			id_entrevista,
			Pergunta,
		}, {
			where: { id }
		}).then((resultado) => {

			return response.status(200).json({
				resultado,
				mensagem: Mensagem.sucesso,
				return: resultado[0] >= 1 ? true : false
			});
		}).catch(() => {

			return response.status(400).json({
				resultado: [],
				mensagem: Mensagem.falha,
				return: false
			});
		});
	},
};