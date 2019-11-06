const { egresso, moderador, view_egresso, view_moderador } = require('../models');

const config = require('../config/auth.json');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

module.exports = {

	athenticate: {
		async egresso(request, response) {

			const { cpf, senha } = request.body;

			const registro = await egresso.findOne({
				where: { cpf },
				raw: true
			});

			if (registro !== null) {

				bcrypt.compare(senha, registro.senha).then(async (auth) => {
					if (auth) {

						const token = jwt.sign({ cpf }, config.secret, {
							expiresIn: 86400,
						});

						const egresso = await view_egresso.findOne({
							where:{cpf},
							raw:true
						});

						return response.status(200).json({ egresso, token, return : auth});

					} else {

						return response.status(403).json({ return : auth });
					}
				});

			} else {

				return response.status(400).json(request.body);

			}
		},


		async moderador(request, response) {

			const { cpf, senha } = request.body;

			const registro = await moderador.findOne({
				where: { cpf },
				raw: true
			});

			if (registro !== null) {

				bcrypt.compare(senha, registro.senha).then(async (auth) => {

					if (auth) {

						const token = jwt.sign({ cpf }, config.secret, {
							expiresIn: 86400,
						});

						const moderador = await view_moderador.findOne({
							where:{cpf},
							raw:true
						});

						return response.status(200).json({moderador, token, return : auth});
						
					} else {

						return response.status(403).json({return : auth});

					}
				});

			} else {

				return response.status(400).json(request.body);

			}
		}
	}
};