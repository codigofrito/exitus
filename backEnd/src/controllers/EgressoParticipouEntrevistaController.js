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
				mensagem: Mensagem.sucesso
			});

		}).catch(() => {

			return response.status(404).json({
				resultado: [],
				mensagem: Mensagem.falha
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
		const { id_entrevista, cpf_egresso } = request.body;

		await EgressoParticiouEntrevista.create({
			id_entrevista,
			cpf_egresso,

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
		const { id_entrevista, cpf_egresso } = request.body;

		await EgressoParticiouEntrevista.destroy({
			where: {id_entrevista, cpf_egresso },
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
		const { id_entrevista, cpf_egresso } = request.body;

		await EgressoParticiouEntrevista.update({
			id_entrevista,
		}, {
			where: { cpf_egresso }

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