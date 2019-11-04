const { curso } = require('../models');
const color = require('colors');

module.exports = {

	async index(request, response) {
		await curso.findAll({ raw: true })
			.then((resultado) => {

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
			})
			.catch((err) => {

				console.log(err);
				console.log(color.red('Falha ao executar operação =/'));

				return response.status(417).json({
					resultado: [],
					mensagem: 'Ocorreu um erro com sua requisição! o_o'
				});
			});
	},

	async show(request, response) {
		const { id } = request.body;

		await curso.findOne({
			where: { id },
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

			return response.status(417).json({
				resultado: [],
				mensagem: 'Ocorreu um erro com sua requisição! o_o'
			});
		});
	},

	async store(request, response) {
		const { id_filial, nome_curso, area } = request.body;

		await curso.create({ id_filial, nome_curso, area }).then((resultado) => {

			console.log(color.green('Operação executada com sucesso =D'));
			
			if(resultado !== [])
				return response.status(200).json({
					resultado,
					mensagem: 'Registro salvo com sucesso *-*'
				});

		}).catch((err) => {

			console.log(err);
			console.log(color.red('Falha ao executar operação =O'));
			
			return response.status(417).json({
				mensagem: 'Falha ao tentar salvar um novo registro o_o'
			});

		});
	},

	async destroy(request, response) {
		const { id } = request.body;

		await curso.destroy({
			where: { id },
			raw: true
		}).then((resultado) => {

			console.log(color.green('Operação executada com sucesso ^^'));

			if(resultado > 0)
				return response.status(200).json({
					resultado: request.body,
					registros: resultado,
					mensagem: 'Os registros foram excluídos da base de dados ^^'
				});

			if(resultado === 0)
				return response.status(203).json({
					resultado: request.body,
					registros: 0,
					mensagem: 'Nenhum registro foi apagado da base de dados!'
				});

		}).catch((err) => {

			console.log(err);
			console.log(color.red('Falha ao executar operação =O'));

			return response.status(417).json({
				resultado: [],
				mensagem: 'Ocorreu um erro com sua requisição! o_o'
			});

		});

		return response.status(200).json(request.body);
	},

	async update(request, response) {
		const { id, id_filial, nome_curso, area } = request.body;

		await curso.update({
			id_filial,
			nome_curso,
			area,
		}, { where: { id } }).then((resultado) => {

			console.log(color.green('Operação executada com sucesso *-*'));
			
			if(resultado[0] == 1)
				return response.status(200).json({
					resultado: request.body,
					mensagem: 'Registro atualizado com sucesso!'
				});

			if(resultado[0] == 0)
				return response.status(203).json({
					resultado: request.body,
					mensagem: 'Nenhum registrofoi atualizado.'
				});

		}).catch((err) => {

			console.log(err);
			console.log(color.red('Falha ao executar operação =/'));

			return response.status(417).json({
				resultado: [],
				mensagem: 'Ocorreu um erro com sua requisição! o_o'
			});
		});
	},
};