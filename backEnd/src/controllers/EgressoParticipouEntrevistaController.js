const EgressoParticiouEntrevista = require('../models').egresso_participou_entrevista;
const Mensagem = require('./mensagem');

module.exports = {

	async index(request, response) {
		await EgressoParticiouEntrevista.findAll({
			raw: true
		}).then((resultado) => {

			return response.status(200).json({
				resultado,
				registros: resultado.length,
				mensagem: Mensagem.sucesso,
				return: resultado.length != 0 ? true : false
			});

		}).catch((err) => {
			console.log("sdsd" + err)
			return response.status(400).json({
				resultado: [],
				mensagem: Mensagem.falha,
				return: false
			});
		});
	},

	async show(request, response) {
		const { cpf_egresso } = request.body;

		await EgressoParticiouEntrevista.findOne({
			where: { cpf_egresso },
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
		const { id_entrevista, cpf_egresso } = request.body;

		await EgressoParticiouEntrevista.create({
			id_entrevista,
			cpf_egresso,

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
				return: false
			});
		});
	},

	async destroy(request, response) {
		const { id_entrevista, cpf_egresso } = request.body;

		await EgressoParticiouEntrevista.destroy({
			where: {id_entrevista, cpf_egresso },
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
		const { id_entrevista, cpf_egresso } = request.body;

		await EgressoParticiouEntrevista.update({
			id_entrevista,
		}, {
			where: { cpf_egresso }

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