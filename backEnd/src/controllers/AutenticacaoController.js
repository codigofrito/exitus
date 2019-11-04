const { egresso, moderador } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
	athenticate: {
		async egresso(request, response) {

			const { cpf, senha } = request.body;
			const registro = await egresso.findOne({
				where: {cpf},
				raw: true
			});

			if (registro !== null) {
				bcrypt.compare(senha, registro.senha).then((res)=>{
					if(res){
						return response.status(200).json({ res });
					} else {
						return response.status(403).json(res);
					}
				});
				
			} else {
				return response.status(404).json(request.body);
			}
		},
		async moderador(request, response) {

			const { cpf, senha } = request.body;

			const registro = await moderador.findOne({
				where: { cpf },
				raw: true
			});

			if (registro !== null) {
				bcrypt.compare(senha, registro.senha).then((res)=>{
					if(res){
						return response.status(200).json(res);
					} else {
						return response.status(404).json(res);
					}
				});
				
			} else {
				return response.status(404).json(request.body);
			}
		}
	}
};