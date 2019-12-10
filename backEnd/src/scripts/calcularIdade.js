module.exports = (data_nascimento) => {
	let data_atual = new Date();
	let aniversario = new Date(data_nascimento);
	let idade;

	let ano = data_atual.getFullYear();
	let mes = data_atual.getMonth() + 1;
	let dia = data_atual.getDate();

	let ano_aniversario = aniversario.getFullYear();
	let mes_aniversario = aniversario.getMonth() + 1;
	let dia_aniversario = aniversario.getDate() + 1;

	idade = ano - ano_aniversario;

	if (mes < mes_aniversario || (mes == mes_aniversario && dia < dia_aniversario)) {
		idade--;
	}
	return idade < 0 ? 0 : idade;
};