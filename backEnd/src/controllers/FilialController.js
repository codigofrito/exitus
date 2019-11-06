const Filial = require('../models').filial;
const Mensagem = require('./mensagem');

module.exports = {

	async index(request, response) {
		await Filial.findAll({ raw: true })
			.then((resultado) => {

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

		await Filial.findOne({
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
		const { nome_filial, estado, cidade } = request.body;

		await Filial.create({
			nome_filial,
			estado,
			cidade,
		}).then((resultado) => {

			return response.status(200).json({
				resultado,
				mensagem: Mensagem.sucesso,
				return: true
			});
		}).catch(() => {

			return response.status(400).json({
				resultado: [],
				mensagem: Mensagem.falha,
				return: true
			});
		});
	},

	async destroy(request, response) {
		const { id } = request.body;

		await Filial.destroy({
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
		const { id, nome_filial, estado, cidade } = request.body;

		await Filial.update({
			nome_filial,
			estado,
			cidade,
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