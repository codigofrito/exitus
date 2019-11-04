const  EgressoPossuiCurso  = require('../models').egresso_possui_curso;
const Mensagem = require('./mensagem');

module.exports = {

	async index(request, response) {
		await EgressoPossuiCurso.findAll({
			raw: true
		}).then((resultado) => {

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
		const { cpf } = request.body;

		await EgressoPossuiCurso.findOne({
			where: { cpf },
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
		const {
			cpf_egresso,
			id_curso,
			concluiu,
			impressao,
			observacao,
			atuacao,
			ano_inicio_curso,
			ano_terminocurso
		} = request.body;

		await EgressoPossuiCurso.create({
			cpf_egresso,
			id_curso,
			concluiu,
			impressao,
			observacao,
			atuacao,
			ano_inicio_curso,
			ano_terminocurso,

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
		const { cpf_egresso, id_curso } = request.body;

		await EgressoPossuiCurso.destroy({
			where: {cpf_egresso, id_curso },
			raw: true
		}).then((resultado) => {

			return response.status(200).json({
				resultado: request.body,
				registros: resultado,
				mensagem: Mensagem.sucesso
			});
		}).catch(() => {

			return response.status(404).json({
				resultado: request.body,
				registros: 0,
				mensagem: Mensagem.falha
			});
		});
	},

	async update(request, response) {
		const {
			cpf_egresso,
			id_curso,
			concluiu,
			impressao,
			observacao,
			atuacao,
			ano_inicio_curso,
			ano_terminocurso,
		} = request.body;

		await EgressoPossuiCurso.update({
			id_curso,
			concluiu,
			impressao,
			observacao,
			atuacao,
			ano_inicio_curso,
			ano_terminocurso,
		}, {
			where: {
				cpf_egresso
			}
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