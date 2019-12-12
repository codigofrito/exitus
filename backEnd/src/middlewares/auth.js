const jwt = require('jsonwebtoken');
const {secret} = require('../config/auth.json');
module.exports = {
    
	egresso : (request, response, next) => {

		const headerToken = request.headers.token;
		const tokenPiece = headerToken.split(' ');
		const [scheme, token] = tokenPiece;

		if (!headerToken)
			return response.status(401).json({mensagem_autenticacao: 'Token não encontrado', return: false});
    
		if(tokenPiece.length < 2)
			return response.status(401).json({mensagem_autenticacao: 'Token incompleto', return: false});
        
		if(!/^Bearer$/i.test(scheme))
			return response.status(401).json({mensagem_autenticacao: 'Token mal formatado', return: false});
        
		jwt.verify(token, secret, (err, decoded) => {
			if (err) return response.status(401).json({mensagem_autenticacao: 'Token inválido', return: false});
            
			request.id = decoded.cpf;
			return next();
		});
	},
    
	moderador : (request, response, next) => {

		const headerToken = request.headers.token;
		const tokenPiece = headerToken.split(' ');
		const [scheme, token] = tokenPiece;

		if (!headerToken)
			return response.status(401).json({mensagem_autenticacao: 'Token não encontrado', return: false});
    
		if(tokenPiece.length < 2)
			return response.status(401).json({mensagem_autenticacao: 'Token incompleto', return: false});
        
		if(!/^Bearer$/i.test(scheme))
			return response.status(401).json({mensagem_autenticacao: 'Token mal formatado', return: false});
        
		jwt.verify(token, secret, (err, decoded) => {
			if (err) return response.status(401).json({mensagem_autenticacao: 'Token inválido', return: false});
            
			request.id = decoded.cpf;
			return next();
		});
	}
};