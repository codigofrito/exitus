const {
	view_moderador
} = require('../models');
const color = require('colors');
const calcularIdade = require('../scripts/calcularIdade');

module.exports = {

	async index(request, response) {

		let registrosBrutos = await view_moderador.findAll({
			raw: true
		}).then((resultado) => {
			console.log(color.green('Operação executada com sucesso *-*'));
			return resultado;
		}).catch((err) => {
			console.log(err);
			console.log(color.red('Falha ao executar operação =/'));
			return [];
		});

		let registros = registrosBrutos.map(registro => {
			registro.idade = calcularIdade(registro.data_nascimento);
			return registro;
		});

		return response.status(200).json(registros);
	},

	async show(request, response) {
		const {
			cpf
		} = request.body;

		let registroBruto = await view_moderador.findOne({
			where: {
				cpf
			},
			raw: true
		}).then((resultado) => {
			console.log(color.green('Operação executada com sucesso =D'));
			return resultado;
		}).catch((err) => {
			console.log(err);
			console.log(color.red('Falha ao executar operação =O'));
			return [];
		});

		let registro = registroBruto.map(registro => {
			registro.idade = calcularIdade(registro.data_nascimento);
			return registro;
		});

		return response.status(200).json(registro);
	},
};