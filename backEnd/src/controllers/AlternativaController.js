const Alternativa = require('../models').alternativa;
const color = require('colors');

module.exports = {

	async index(request, response) {

		await Alternativa.findAll({ raw: true }).then((resultado) => {

			console.log(color.green('Operação executada com sucesso *-*'));
			if (resultado.length !== 0)
				return response.status(200).json({
					resultado,
					registros: resultado.length,
					messagem: 'Foram entrados registros ^^'
				});
			
			if (resultado.length === 0)
				return response.status(204).json({
					resultado,
					registros: 0,
					mesagem: 'Não foi encontrado nenhum registro =/'
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

	async show(request, response) {
		const { id } = request.body;

		await Alternativa.findOne({
			where: { id },
			raw: true

		}).then((resultado) => {
			console.log(color.green('Operação executada com sucesso =D'));

			if (resultado !== null)
				return response.status(200).json({resultado,
					mesagem: 'Registro encontrado ;D'});
			

			if (resultado == null)
				return response.status(204).json({resultado,
					mesagem: 'Nenhum registro encontrado =('
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

	async store(request, response) {
		const { id_pergunta, alternativa,  objetiva } = request.body;

		await Alternativa.create({
			id_pergunta,
			alternativa,
			objetiva,

		}).then((resultado) => {

			console.log(color.green('Operação executada com sucesso =D'));

			if(resultado !== [])
				return response.status(200).json({
					resultado,
					messagem: 'Registro salvo com sucesso *-*'
				});

		}).catch((err) => {

			console.log(err);
			console.log(color.red('Falha ao executar operação =O'));

			return response.status(203).json({
				resultado: [],
				mensagem: 'Não foi possível gravar os dados!'
			});

		});
	},

	async destroy(request, response) {
		const { id } = request.body;

		await Alternativa.destroy({
			where: { id },
			raw: true

		}).then((resultado)=> {
			console.log(color.green('Operação executada com sucesso ^^'));

			if(resultado > 0)
				return response.status(200).json({
					resultado: request.body,
					registros: resultado,
					mensagem: 'Os registros foram deletados com sucesso *-*'
				});
			
			if(resultado === 0)
				return response.status(404).json({
					resultado: request.body,
					registros: 0,
					mensagem: 'Nenhum registro foi apagado da base de dados....'
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

	async update(request, response) {
		const { id, id_pergunta, alternativa, objetiva } = request.body;

		await Alternativa.update({
			id_pergunta,
			alternativa,
			objetiva,
		}, { where: { id } }).then((resultado) => {

			console.log(color.green('Operação executada com sucesso *-*'));

			if(resultado[0] == 1)
				return response.status(200).json({
					resultado: request.body,
					mensagem: 'Os dados foram atualizados com sucesso ;D'
				});
			
			if(resultado[0] == 0)
				return response.status(404).json({
					resultado: request.body,
					mensagem: 'Nenhum dado foi alterado na base de dados ^^'
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