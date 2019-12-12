const Entrevista = require('../models').entrevista;
const Alternativa = require('../models').alternativa;
const Pergunta = require('../models').pergunta;

const Mensagem = require('./mensagem');

module.exports = {
	show: async (request, response) => {
		const {id} = request.body;
		const Questionario = {
			titulo: '',
			descricao: '',
			perguntas: []
		};
		await Entrevista.findOne({
			where: {
				id
			},
			raw: true
		}).then(entrevista => {
			Questionario.titulo = entrevista.titulo;
			Questionario.descricao = entrevista.descricao;
			Pergunta.findAll({
				where: {
					id_entrevista: entrevista.id
				},
				raw: true
			}).then(async perguntas => {
				await perguntas.forEach(async (perguntas, index, array) => {
					const alternativas = await Alternativa.findAll({
						where: {
							id_pergunta: perguntas.id
						},
						raw: true
					});

					Questionario.perguntas.push({
						pergunta: perguntas.pergunta,
						alternativas
					});

					if(index == array.length -1) {
						return response.status(200).json({ Questionario });
					}
				});
				
			});
		});
	}
};
