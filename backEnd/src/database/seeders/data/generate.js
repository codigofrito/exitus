/* eslint-disable require-atomic-updates */
const  fs = require('fs');
const color = require('colors');
const db = [];
async function readFiles () {
	fs.readdirSync(__dirname).filter((arquivo) => {
		if (arquivo.slice(-6) === '.db.js') {
			return arquivo;
		}
	}).forEach(function (arquivo) {
		db[arquivo.substring(0, arquivo.length -6)] = require('./' + arquivo);
	});
}
async function generateRegisters () {
	return new Promise((resolve) => {
		Object.keys(db).forEach(async (generator, index, arr) => {
			db[generator].successes = await db[generator].generate();
			//console.log(arr.length, index);
			if(index == (arr.length - 1)) {
				resolve('');
			}
		});
	});

}

async function showLog () {
	Object.keys(db).forEach(generator => {
		console.log(color.blue(`${db[generator].successes > 1 ? 'Foram criados' : 'Foi criado'} ${color.green(db[generator].successes)} de ${color.green(db[generator].registros)} registros para a tabela "${color.yellow(generator)}"`));
	});
}

(async function () {
	await readFiles();
	await generateRegisters();
	await showLog();
})();