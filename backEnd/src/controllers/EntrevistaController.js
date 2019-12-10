const Entrevista = require('../models').entrevista;
const Alternativa = require('../models').alternativa;
const Pergunta = require('../models').pergunta;

const Mensagem = require('./mensagem');

module.exports = {

	async index(request, response) {
		await Entrevista.findAll({ raw: true })
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
		await Entrevista.findOne({
			where: { id },
			raw: true
		}).then((resultado) => {
			return response.status(200).json({
				resultado,
				mensagem: Mensagem.sucesso,
				return: resultado !== null ? true : false
			});
		}).catch((err) => {
			return response.status(400).json({
				resultado: [],
				mensagem: Mensagem.falha,
				return: false
			});
		});
	},

	async store(request, response) {
		const { 
			cpf_moderador,
			titulo,
			descricao,
			perguntas,
			alternativas } = request.body;

		await Entrevista.create({
			cpf_moderador,
			titulo,
			descricao,
		}).then((resultado) => {
			perguntas.forEach(async (pergunta, index) => {
				await Pergunta.create({
					id_entrevista: resultado.id,
					pergunta
				}).then(async resultado => {
					await alternativas[index].forEach(async alternativa => {
						await Alternativa.create({
							id_pergunta: resultado.id,
							alternativa
						});
					});
					return response.status(200).json({
						mensagem: Mensagem.sucesso,
						return: true
					});
				});
			});
			
		}).catch(() => {
			return response.status(400).json({
				resultado: [],
				mensagem: Mensagem.falha,
				return: false
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