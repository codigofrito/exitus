const Alternativa = require('../models').alternativa;
const Mensagem = require('./mensagem');

module.exports = {

	async index(request, response) {

		await Alternativa.findAll({ raw: true })
			.then((resultado) => {

				return response.status(200).json({
					resultado,
					registros: resultado.length,
					mesagem: Mensagem.sucesso,
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
		const {id} = request.body;

		await Alternativa.findOne({
			where: { id },
			raw: true
		}).then((resultado) => {

			return response.status(200).json({
				resultado,
				mesagem: Mensagem.sucesso,
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
		const { id_pergunta, alternativas, objetiva } = request.body;

		alternativas.forEach(async alternativa => {
			await Alternativa.create({
				id_pergunta,
				alternativa,
				objetiva,

			}).then((resultado) => {

				return response.status(200).json({
					resultado,
					messagem: Mensagem.sucesso,
					return: true
				});

			}).catch(() => {
			
				return response.status(400).json({
					resultado: [],
					mensagem: Mensagem.falha,
					return: false
				});
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
				mensagem: Mensagem.sucesso,
				return: resultado >= 1 ? true : false
				
			});

		}).catch(() => {

			return response.status(417).json({
				resultado: [],
				mensagem: Mensagem.falha,
				return: false
			});
		});
	},

	async update(request, response) {
		const { id, id_pergunta, alternativa, objetiva } = request.body;

		await Alternativa.update({
			id_pergunta,
			alternativa,
			objetiva,
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
					mensagem: 'Erro ao tentar executara a operação.',
					return: false
				});
			});
	},
};