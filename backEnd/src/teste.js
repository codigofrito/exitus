const nome = undefined
const campos = {
    leo: "ok",
    cpf: "ik"
}
const camposValidados = []
for([chave, valor] of Object.entries(campos)) {
    if(valor){
        camposValidados.push(valor)
    }
}

const fields = (campos) => {
    let resultado = ''
    campos.forEach((valor, indice, array) => {
        resultado += '"' + valor + '" : "' + valor + '",'
    })
    return JSON.parse(('{' + resultado.substr(0, resultado.length -1) + '}'))
}

console.log(fields(camposValidados))