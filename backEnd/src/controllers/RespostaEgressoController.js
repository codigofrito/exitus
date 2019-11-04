const RespostaEgresso = require('../models').resposta_egresso;
const Mensagem = require('./mensagem');

module.exports = {

	async index(request, response) {
		await RespostaEgresso.findAll({ raw: true })
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

	async store(request, response) {
		const {
			id_pergunta,
			id_alternativa,
			cpf_egresso,
			resposta_subjetiva,
		} = request.body;

		await RespostaEgresso.create({
			id_pergunta,
			id_alternativa,
			cpf_egresso,
			resposta_subjetiva,
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

		await RespostaEgresso.destroy({
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
		const {
			id,
			id_pergunta,
			id_alternativa,
			cpf_egresso,
			resposta_subjetiva,
		} = request.body;

		await RespostaEgresso.update({
			id,
			id_pergunta,
			id_alternativa,
			cpf_egresso,
			resposta_subjetiva,
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