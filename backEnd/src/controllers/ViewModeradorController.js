const ViewModerador = require('../models').view_moderador;
const Mensagem = require('./mensagem');
const calcularIdade = require('../scripts/calcularIdade');

module.exports = {

	async index(request, response) {

		await ViewModerador.findAll({
			raw: true
		}).then((resultado) => {

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

		await ViewModerador.findOne({
			where: { cpf },
			raw: true
		}).then((resultado) => {

			resultado.idade = calcularIdade(resultado.data_nascimento);

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