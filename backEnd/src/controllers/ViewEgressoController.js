const ViewEgresso = require('../models').view_egresso;
const Mensagem = require('./mensagem');
const calcularIdade = require('../scripts/calcularIdade');

module.exports = {

	async index(request, response) {

		await ViewEgresso.findAll({
			raw: true
		}).then((resultado) => {

			let registros = resultado.map(registro => {
				registro.idade = calcularIdade(registro.data_nascimento);
				return registro;
			});
			
			return response.status(200).json({
				resultado: registros,
				registros: resultado.length,
				mensagem: Mensagem.sucesso,
				return: resultado.length != 0 ? true : false
			});
		}).catch((err) => {
			console.log(err);
			return response.status(400).json({
				resultado: [],
				registros: 0,
				mensagem: Mensagem.falha,
				return: false
			});
		});
	},

	async show(request, response) {
		const { cpf } = request.body;

		await ViewEgresso.findOne({
			where: { cpf },
			raw: true
		}).then((resultado) => {

			resultado.idade = resultado.calcularIdade(resultado.data_nascimento);

			return response.status(200).json({
				resultado,
				mensagem: Mensagem.sucesso,
				return: resultado >= 1 ? true : false
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