const {
	pessoa
} = require('../models/');
const color = require('colors');
const calcularIdade = require('../scripts/calcularIdade');

module.exports = {

	async index(request, response) {
		let registrosBrutos = await pessoa.findAll({
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

		let registro = await pessoa.findOne({
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
		if(registro !== null) {
			registro.idade = calcularIdade(registro.data_nascimento);
			return response.status(200).json(registro);
		} else {
			return response.status(404).json(registro);
		}
		
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

		let novoRegistro = await pessoa.create({
			cpf,
			nome,
			sobrenome,
			data_nascimento,
			email,
			celular
		}).then((resultado) => {
			console.log(color.green('Operação executada com sucesso =D'));
			return resultado;
		}).catch((err) => {
			console.log(err);
			console.log(color.red('Falha ao executar operação =O'));
			return [];
		});

		if( Object.keys(novoRegistro).length !== 0) {
			return response.status(200).json(novoRegistro);
		} else {
			return response.status(401).json(novoRegistro);
		}
	},

	async destroy(request, response) {
		const {
			cpf
		} = request.body;

		let registroDeletado = await pessoa.destroy({
			where: {
				cpf
			},
			raw: true
		}).then((resultado) => {
			console.log(color.green('Operação executada com sucesso ^^'));
			return resultado;
		}).catch((err) => {
			console.log(err);
			console.log(color.red('Falha ao executar operação =O'));
			return [];
		});

		if(registroDeletado >= 1) {
			return response.status(200).json(request.body);
		} else {
			return response.status(404).json(request.body);
		}
		
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

		await pessoa.update({
			nome,
			sobrenome,
			data_nascimento,
			email,
			celular
		}, {
			where: {
				cpf
			}
		}).then((resultado) => {
			console.log(color.green('Operação executada com sucesso *-*'));
			return resultado;
		}).catch((err) => {
			console.log(err);
			console.log(color.red('Falha ao executar operação =/'));
			return [];
		});
		return response.status(200).json(request.body);
	},
};