const ViewRespostaEgresso = require('../models').view_resposa_egresso;
const Mensagem = require('./mensagem');

module.exports = {

	async index(request, response) {

		await ViewRespostaEgresso.findAll({ raw: true })
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
		const { cpf_egresso, id_entrevista } = request.body;

		await ViewRespostaEgresso.findOne({
			where: {
				cpf_egresso,
				id_entrevista,
			},
			raw: true
		}).then((resultado) => {

			return response.status(200).json({
				resultado,
				mensagem: Mensagem.sucesso
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