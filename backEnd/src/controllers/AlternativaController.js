const Alternativa = require('../models').alternativa;
const Mensagem = require('./mensagem');

module.exports = {

	async index(request, response) {

		await Alternativa.findAll({ raw: true })
			.then((resultado) => {

				return response.status(200).json({
					resultado,
					registros: resultado.length,
					mesagem: Mensagem.sucesso
				});
			}).catch(() => {

				return response.status(404).json({
					resultado: [],
					mensagem: Mensagem.falha
				});
			});
	},

	async show(request, response) {
		const { id } = request.body;

		await Alternativa.findOne({
			where: { id },
			raw: true
		}).then((resultado) => {

			return response.status(200).json({
				resultado,
				mesagem: Mensagem.sucesso
			});

		}).catch(() => {

			return response.status(404).json({
				resultado: [],
				mensagem: Mensagem.falha
			});
		});
	},

	async store(request, response) {
		const { id_pergunta, alternativa, objetiva } = request.body;

		await Alternativa.create({
			id_pergunta,
			alternativa,
			objetiva,

		}).then((resultado) => {

			return response.status(200).json({
				resultado,
				messagem: Mensagem.sucesso
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

		await Alternativa.destroy({
			where: { id },
			raw: true

		}).then((resultado) => {

			return response.status(200).json({
				resultado: request.body,
				registros: resultado,
				mensagem: Mensagem.sucesso
			});

		}).catch(() => {

			return response.status(417).json({
				resultado: [],
				mensagem: Mensagem.falha
			});
		});
	},

	async update(request, response) {
		const { id, id_pergunta, alternativa, objetiva } = request.body;

		await Alternativa.update({
			id_pergunta,
			alternativa,
			objetiva,
		}, { where: { id } }).then(() => {

			return response.status(200).json({
				resultado: request.body,
				mensagem: Mensagem.sucesso
			});

		}).catch(() => {

			return response.status(404).json({
				resultado: [],
				mensagem: 'Erro ao tentar executara a operação.'
			});
		});
	},
};