const Entrevista = require('../models').entrevista;
const Mensagem = require('./mensagem');

module.exports = {

	async index(request, response) {
		await Entrevista.findAll({ raw: true })
			.then((resultado) => {

				return response.status(200).json({
					resultado,
					registros: resultado.length,
					mensagem: Mensagem.sucesso
				});
			}).catch(() => {

				return response.status(404).json({
					resultado: [],
					registros: 0,
					mensagem: Mensagem.falha
				});
			});
	},

	async show(request, response) {
		const {     id } = request.body;

		await Entrevista.findOne({
			where: { id },
			raw: true
		}).then((resultado) => {

			return response.status(200).json({
				resultado,
				mensagem: Mensagem.sucesso
			});
		}).catch(() => {

			return response.status(404).json({
				resultado: [],
				mensagem: Mensagem.falha
			});
		});
	},

	async store(request, response) {
		const { cpf_moderador, titulo, descricao } = request.body;

		await Entrevista.create({
			cpf_moderador,
			titulo,
			descricao,
		}).then((resultado) => {

			return response.status(200).json({
				resultado,
				mensagem: Mensagem.sucesso
			});
		}).catch(() => {

			return response.status(404).json({
				resultado: [],
				mensagem: Mensagem.falha
			});
		});
	},

	async destroy(request, response) {
		const { id } = request.body;

		await Entrevista.destroy({
			where: { id },
			raw: true
		}).then((resultado) => {

			return response.status(200).json({
				resultado: request.body,
				registros: resultado,
				mensagem: Mensagem.sucesso
			});
		}).catch(() => {

			return response.status(404).json({
				resultado: [],
				registros: 0,
				mensagem: Mensagem.falha
			});
		});
	},

	async update(request, response) {
		const { id, cpf_moderador, titulo, descricao } = request.body;

		await Entrevista.update({
			cpf_moderador,
			titulo,
			descricao,
		}, {
			where: { id }
		}).then((resultado) => {

			return response.status(200).json({
				resultado,
				mensagem: Mensagem.sucesso
			});
		}).catch(() => {

			return response.status(404).json({
				resultado: [],
				mensagem: Mensagem.falha
			});
		});
	},
};