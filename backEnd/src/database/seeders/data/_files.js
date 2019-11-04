const fs = require('fs');
const db = [];

(async function readFiles() {
	fs.readdirSync(__dirname).filter((arquivo) => {
		if (arquivo.slice(-6) === '.db.js') {
			return arquivo;
		}
	}).forEach(function (arquivo) {
		db[arquivo.substring(0, arquivo.length - 6)] = require('./' + arquivo);
	});
})();

module.exports = db;