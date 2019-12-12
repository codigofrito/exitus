const Cursos = require('../models').cursos;
const Mensagem = require('./mensagem');

module.exports = {

	async index(request, response) {
		await Cursos.findAll({ raw: true })
			.then((resultado) => {
				return response.status(200).json({
					resultado,
					registros: resultado.length,
					mensagem: Mensagem.sucesso,
					return: resultado.length != 0 ? true : false
				});

			})
			.catch((err) => {
				console.log(err);
				return response.status(400).json({
					resultado: [],
					registros: 0,
					mensagem: Mensagem.falha,
					return: false
				});
			});
	},
};