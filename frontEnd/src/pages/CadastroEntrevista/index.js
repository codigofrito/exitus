import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import ModalCriarPergunta from '../../components/ModalCriarPergunta';
import TableQuestions from './TableQuestions';

const plusIcon = <FontAwesomeIcon icon={faPlusCircle} />

let arrayNewQuestions = [];

let perguntaTeste = {

    id: 1,
    id_entrevista: 1,
    pergunta: "Teste Pergunta 01",
    created_at: "2019-11-05 00:40:36",
    updated_at: "2019-11-05 00:40:36"

}

let arrayQuestionsInterview = [
    {
        id: 1,
        id_entrevista: 1,
        pergunta: "Teste Pergunta 01",
        tipo_aternativas: "Objetiva",
        created_at: "2019-11-05 00:40:36",
        updated_at: "2019-11-05 00:40:36",
        alternativas: [
            { id: 1, id_pergunta: 1, alternativa: "Estou Trabalhando na área", created_at: "2019-11-05 00:40:36", updated_at: "2019-11-05 00:40:36" },
            { id: 2, id_pergunta: 1, alternativa: "Estou desempregado", created_at: "2019-11-05 00:40:36", updated_at: "2019-11-05 00:40:36" },
            { id: 3, id_pergunta: 1, alternativa: "Estou vendendo o meu corpo", created_at: "2019-11-05 00:40:36", updated_at: "2019-11-05 00:40:36" },
        ]
    },
    {
        id: 2,
        id_entrevista: 1,
        pergunta: "Teste Pergunta 02",
        tipo_aternativas: "Objetiva/Subjetiva",
        created_at: "2019-11-05 00:40:36",
        updated_at: "2019-11-05 00:40:36",
        alternativas: [
            { id: 4, id_pergunta: 1, alternativa: "Estou Trabalhando na área", created_at: "2019-11-05 00:40:36", updated_at: "2019-11-05 00:40:36" },
            { id: 5, id_pergunta: 1, alternativa: "Estou desempregado", created_at: "2019-11-05 00:40:36", updated_at: "2019-11-05 00:40:36" },
            { id: 6, id_pergunta: 1, alternativa: "Estou vendendo o meu corpo", created_at: "2019-11-05 00:40:36", updated_at: "2019-11-05 00:40:36" },
            { id: 7, id_pergunta: 1, alternativa: "Estou vendendo o meu corpo", created_at: "2019-11-05 00:40:36", updated_at: "2019-11-05 00:40:36" },
        ]
    },
    {
        id: 3,
        id_entrevista: 1,
        pergunta: "Teste Pergunta 03",
        tipo_aternativas: "Objetiva/Subjetiva",
        created_at: "2019-11-05 00:40:36",
        updated_at: "2019-11-05 00:40:36",
        alternativas: [
            { id: 8, id_pergunta: 1, alternativa: "Estou Trabalhando na área", created_at: "2019-11-05 00:40:36", updated_at: "2019-11-05 00:40:36" },
            { id: 9, id_pergunta: 1, alternativa: "Estou desempregado", created_at: "2019-11-05 00:40:36", updated_at: "2019-11-05 00:40:36" },
        ]
    },
    {
        id: 4,
        id_entrevista: 1,
        pergunta: "Teste Pergunta 04",
        tipo_aternativas: "Subjetiva",
        created_at: "2019-11-05 00:40:36",
        updated_at: "2019-11-05 00:40:36",
        alternativas: [
            { id: 10, id_pergunta: 1, alternativa: "Estou Trabalhando na área", created_at: "2019-11-05 00:40:36", updated_at: "2019-11-05 00:40:36" },
        ]
    },

];

function CadastroEntrevista() {

    return (


        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Título Entrevista</label>
                    <input type="text" className="form-control" id="tituloEntrevista" placeholder="Insira o título da entrevista" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Descrição</label>
                    <textarea className="form-control" id="descricaoEntrevista" placeholder="Insira uma breve descrição da entrevista" rows="2"></textarea>
                </div>

                <br />

                <div className="form-group  text-center">
                    <a onClick="" className="btn btn-success" data-toggle="modal" href="#modalCriarPergunta"> {plusIcon} Adicionar Nova Pergunta</a>
                </div>

                <br />

                <TableQuestions dataTable={arrayQuestionsInterview} />

                <br />


                <div className="form-group  text-center">

                    <button type="submit" className="btn btn-primary">Salvar Entrevista</button>

                </div>
            </form>

            <ModalCriarPergunta dataQuestion={perguntaTeste} />

        </div>


    );

}



export default CadastroEntrevista;
