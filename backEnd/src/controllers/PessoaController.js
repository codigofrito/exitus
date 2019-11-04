const Pessoa = require('../models/').pessoa;
const Mensagem = require('./mensagem');
const calcularIdade = require('../scripts/calcularIdade');

module.exports = {

	async index(request, response) {
		await Pessoa.findAll({ raw: true })
			.then((resultado) => {

				let registros = resultado.map(registro => {
					registro.idade = calcularIdade(registro.data_nascimento);
					return registro;
				});

				return response.status(200).json({
					resultado: registros,
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

		let registro = await Pessoa.findOne({
			where: { cpf },
			raw: true
		}).then((resultado) => {

			resultado.idade = calcularIdade(registro.data_nascimento);
			
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
			cpf,
			nome,
			sobrenome,
			data_nascimento,
			email,
			celular
		} = request.body;

		await Pessoa.create({
			cpf,
			nome,
			sobrenome,
			data_nascimento,
			email,
			celular
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
		const { cpf } = request.body;

		await Pessoa.destroy({
			where: { cpf },
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
			cpf,
			nome,
			sobrenome,
			data_nascimento,
			email,
			celular
		} = request.body;

		await Pessoa.update({
			nome,
			sobrenome,
			data_nascimento,
			email,
			celular
		}, {
			where: { cpf }
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