const {
	egresso
} = require('../models/');
const color = require('colors');
const bcrypt = require('bcryptjs');

module.exports = {

	async index(request, response) {

		let registros = await egresso.findAll({
			raw: true
		}).then((resultado) => {

			console.log(color.green('Operação executada com sucesso *-*'));

			if(resultado.length > 0)
				return response.status(200).json({
					resultado,
					registros: resultado.length,
					mensagem: 'Registros encontrados com sucesso!'
				});

			if(resultado == 0)
				return response.status(200).json({
					resultado,
					registros: 0,
					mensagem: 'Não foram encontrados registros para sua requisição!'
				});

		}).catch((err) => {

			console.log(err);
			console.log(color.red('Falha ao executar operação =/'));
			
			return response.status(417).json({
				resultado: [],
				mensagem: 'Ocorreu um erro com sua requisição! o_o'
			});

		});

		return response.status(200).json(registros);
	},

	async show(request, response) {
		const {
			cpf
		} = request.body;

		let registro = await egresso.findOne({
			where: {
				cpf
			},
			raw: true
		}).then((resultado) => {

			console.log(color.green('Operação executada com sucesso =D'));
			
			if(resultado !== null)
				return response.status(200).json({
					resultado,
					mensagem: 'Registro encontrado com sucesso =D'
				});

			if(resultado == null)
				return response.status(200).json({
					resultado,
					mensagem: 'Nenhum registro encontrado =/'
				});

		}).catch((err) => {
			console.log(err);
			console.log(color.red('Falha ao executar operação =O'));
			return [];
		});

		return response.status(200).json(registro);
	},

	async store(request, response) {
		const {
			cpf,
			senha,
		} = request.body;

		let novoRegistro = await egresso.create({
			cpf,
			senha: bcrypt.hashSync(senha, 10),
		}).then((resultado) => {
			console.log(color.green('Operação executada com sucesso =D'));
			return resultado;
		}).catch((err) => {
			console.log(err);
			console.log(color.red('Falha ao executar operação =O'));
			return [];
		});

		return response.status(200).json(novoRegistro);
	},

	async destroy(request, response) {
		const {
			cpf
		} = request.body;

		await egresso.destroy({
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

		return response.status(200).json(request.body);
	},

	async update(request, response) {
		const {
			cpf,
			senha,
		} = request.body;

		await egresso.update({
			cpf,
			senha,
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