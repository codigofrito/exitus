const Filial = require('../models').filial;
const Mensagem = require('./mensagem');

module.exports = {

	async index(request, response) {
		await Filial.findAll({ raw: true })
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
		const { id } = request.body;

		await Filial.findOne({
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
		const { nome_filial, estado, cidade } = request.body;

		await Filial.create({
			nome_filial,
			estado,
			cidade,
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

		await Filial.destroy({
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