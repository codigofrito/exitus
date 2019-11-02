const db = require('./files');
const color = require('colors');
const readline = require('readline');
const read = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


read.question(color.magenta('Deseja realmente apagar todos os dados das tabelas da base de dados? (Y/N): '), async function (answer) {
	read.close();
	if (answer === 'Y' || answer === 'y') {
		Object.keys(db).forEach(async (file) => {
			await db[file].clear();
		});
			
	}
});
	
