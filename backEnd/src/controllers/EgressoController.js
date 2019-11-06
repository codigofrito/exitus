const Egresso = require('../models/').egresso;
const Mensagem = require('./mensagem');
const bcrypt = require('bcryptjs');

module.exports = {

	async index(request, response) {

		await Egresso.findAll({
			raw: true
		}).then((resultado) => {

			return response.status(200).json({
				resultado,
				registros: resultado.length,
				mensagem: Mensagem.sucesso,
				return: resultado.length != 0 ? true : false
			});

		}).catch(() => {

			return response.status(417).json({
				resultado: [],
				mensagem: Mensagem.falha,
				return: false
			});
		});
	},

	async show(request, response) {

		const { cpf } = request.body;

		await Egresso.findOne({
			where: { cpf },
			raw: true
		}).then((resultado) => {

			return response.status(200).json({
				resultado,
				mensagem: Mensagem.sucesso,
				return: resultado !== null ? true : false
			});

		}).catch(() => {

			return response.status(417).json({
				resultado: [],
				mensagem: Mensagem.falha,
				return: false
			});
		});
	},

	async store(request, response) {
		const {
			cpf,
			senha,
		} = request.body;

		await Egresso.create({
			cpf,
			senha: bcrypt.hashSync(senha, 10),
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
		const { cpf } = request.body;

		await Egresso.destroy({
			where: { cpf },
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
		const { cpf, senha } = request.body;

		await Egresso.update({ cpf, senha }, {
			where: { cpf }
		}).then((resultado) => {

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