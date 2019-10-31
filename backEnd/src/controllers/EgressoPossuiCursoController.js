const {
    egresso_possui_curso
} = require('../models');
const color = require('colors');

module.exports = {

    async index(request, response) {
        let registros = await egresso_possui_curso.findAll({
            raw: true
        }).then((resultado) => {
            console.log(color.green(`Operação executada com sucesso *-*`))
            return resultado
        }).catch((err) => {
            console.log(err)
            console.log(color.red(`Falha ao executar operação =/`))
            return []
        });

        return response.status(200).json(registros);
    },

    async show(request, response) {
        const {
            cpf
        } = request.body;

        let registro = await egresso_possui_curso.findOne({
            where: {
                cpf
            },
            raw: true
        }).then((resultado) => {
            console.log(color.green(`Operação executada com sucesso =D`))
            return resultado
        }).catch((err) => {
            console.log(err)
            console.log(color.red(`Falha ao executar operação =O`))
            return []
        });

        return response.status(200).json(registro);
    },

    async store(request, response) {
        const {
            cpf_egresso,
            id_curso,
            concluiu,
            impressao,
            observacao,
            atuacao,
            ano_inicio_curso,
            ano_terminocurso
        } = request.body;

        let novoRegistro = await egresso_possui_curso.create({
            cpf_egresso,
            id_curso,
            concluiu,
            impressao,
            observacao,
            atuacao,
            ano_inicio_curso,
            ano_terminocurso,

        }).then((resultado) => {
            console.log(color.green(`Operação executada com sucesso =D`))
            return resultado
        }).catch((err) => {
            console.log(err)
            console.log(color.red(`Falha ao executar operação =O`))
            return []
        });

        return response.status(200).json(novoRegistro);
    },

    async destroy(request, response) {
        const {
            cpf_egresso,
            id_curso,
        } = request.body;

        await egresso_possui_curso.destroy({
            where: {
                cpf_egresso,
                id_curso
            },
            raw: true
        }).then((resultado) => {
            console.log(color.green(`Operação executada com sucesso ^^`))
            return resultado
        }).catch((err) => {
            console.log(err)
            console.log(color.red(`Falha ao executar operação =O`))
            return []
        });

        return response.status(200).json(request.body);
    },

    async update(request, response) {
        const {
            cpf_egresso,
            id_curso,
            concluiu,
            impressao,
            observacao,
            atuacao,
            ano_inicio_curso,
            ano_terminocurso,
        } = request.body;

        await egresso_possui_curso.update({
            id_curso,
            concluiu,
            impressao,
            observacao,
            atuacao,
            ano_inicio_curso,
            ano_terminocurso,
        }, {
            where: {
                cpf_egresso
            }
        }).then((resultado) => {
            console.log(color.green(`Operação executada com sucesso *-*`))
            return resultado
        }).catch((err) => {
            console.log(err)
            console.log(color.red(`Falha ao executar operação =/`))
            return []
        });

        return response.status(200).json(request.body);
    },
};