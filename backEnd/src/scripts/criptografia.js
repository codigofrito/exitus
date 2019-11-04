const cryptoJS = require('crypto-js');
const hash = 'U2FsdGVkX19VMHl5Y99nqfXVIJrBYZH0bbl1HRMvHTRPetpfBHhm6hOVC5Azqkti';
module.exports = {
	codificar: (senha) => {
		return cryptoJS.AES.encrypt(senha.toString(), hash);
	},
	decodificar: (senha) => {
		return cryptoJS.AES.decrypt(senha.toString(), hash).toString(cryptoJS.enc.Utf8);
	}
};