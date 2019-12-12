/* eslint-disable require-atomic-updates */
const color = require('colors');
const db = require('./_files');
const readline = require('readline');
const read = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

async function generateRegisters() {
	return new Promise((resolve) => {
		Object.keys(db).forEach(async (generator, index, arr) => {
			console.log(color.yellow(`GERANDO ${db[generator].registros} ${db[generator].registros > 1 ? 'REGISTROS' : 'REGISTRO'} PARA A TABELA "${generator}"`));
			db[generator].successes = await db[generator].generate();
			if (index == (arr.length - 1)) {
				resolve('');
			}
		});
	});

}

async function showLog() {
	console.clear();
	Object.keys(db).forEach(generator => {
		console.log(color.blue(`${db[generator].successes > 1 ? 'Foram criados' : 'Foi criado'} ${(db[generator].successes == db[generator].registros) ? color.brightGreen(db[generator].successes) : color.brightRed(db[generator].successes)} de ${color.green(db[generator].registros)} registros para a tabela "${color.yellow(generator)}".`));
	});
}

(async function () {
	read.question(color.magenta('Deseja gerar dados para a base de dados agora? Isto pode demroar um pouco! (Y/N): '), async function (answer) {
		read.close();
		if (answer === 'Y' || answer === 'y') {
			await generateRegisters();
			await showLog();
		}
	});
})();