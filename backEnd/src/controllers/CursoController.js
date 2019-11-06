const Curso = require('../models').curso;
const Mensagem = require('./mensagem');

module.exports = {

	async index(request, response) {
		await Curso.findAll({ raw: true })
			.then((resultado) => {

				return response.status(200).json({
					resultado,
					registros: resultado.length,
					mensagem: Mensagem.sucesso,
					return: resultado.length != 0 ? true : false
				});

			})
			.catch(() => {

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

		await Curso.findOne({
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
		const { id_filial, nome_Curso, area } = request.body;

		await Curso.create({ id_filial, nome_Curso, area }).then((resultado) => {

			return response.status(200).json({
				resultado,
				mensagem: Mensagem.sucesso,
				return: true
			});

		}).catch(() => {

			return response.status(400).json({
				mensagem: Mensagem.falha,
				return: false
			});

		});
	},

	async destroy(request, response) {
		const { id } = request.body;

		await Curso.destroy({
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
				mensagem: Mensagem.falha,
				return: false
			});

		});
	},

	async update(request, response) {
		const { id, id_filial, nome_Curso, area } = request.body;

		await Curso.update({
			id_filial,
			nome_Curso,
			area,
		}, { where: { id } })
			.then((resultado) => {

				return response.status(200).json({
					resultado: request.body,
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