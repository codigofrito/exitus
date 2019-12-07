const { egresso, moderador, view_egresso, view_moderador } = require('../models');

const config = require('../config/auth.json');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

module.exports = {

	authenticate: async (request, response) => {
		const { cpf, password: senha } = request.body;

		const registro = { 
			user: await moderador.findOne({
				where: { cpf },
				raw: true
			}).then(async result => {
				if (!result) {
					console.log('FALSE');
					return await egresso.findOne({
						where: { cpf },
						raw: true
					});
				} else {
					return result;
				}
			})
		};

		if (registro.user !== null) {
			console.log(registro);

			bcrypt.compare(senha, registro.user.senha).then(async (auth) => {
				if (auth) {

					const token = jwt.sign({ cpf }, config.secret, {
						expiresIn: 86400,
					});

					const user = registro.type == 'moderator'
						? await view_moderador.findOne({
							where:{cpf},
							raw:true
						}) 
						: await view_egresso.findOne({
							where:{cpf},
							raw:true
						});

					return response.status(200).json({ user, token, return : auth});

				} else {

					return response.status(403).json({ return : auth });
				}
			});

		} else {

			return response.status(400).json(request.body);

		}
	},
};