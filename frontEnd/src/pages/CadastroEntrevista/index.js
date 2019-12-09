import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { FormGroup, Form } from '../../styles/BootstrapStyled';

import ModalCriarPergunta from '../../components/ModalCriarPergunta';
import TableQuestions from './TableQuestions';
import Axios from 'axios';

import { Container } from "../../styles/BootstrapStyled";
import { Content } from "../../styles/customGlobalStyled";

const plusIcon = <FontAwesomeIcon icon={faPlusCircle} />;

class CadastroEntrevista extends Component {

	constructor(props) {
		super(props);
		this.state = {
			interviewTitle: '',
			interviewDescription: '',
			perguntas: [
				{
					id: 1,
					id_entrevista: 1,
					pergunta: 'Teste Pergunta 01',
					tipo_aternativas: 'Objetiva',
					created_at: '2019-11-05 00:40:36',
					updated_at: '2019-11-05 00:40:36',
					alternativas: [
						{ id: 1, id_pergunta: 1, alternativa: 'Estou Trabalhando na área', created_at: '2019-11-05 00:40:36', updated_at: '2019-11-05 00:40:36' },
						{ id: 2, id_pergunta: 1, alternativa: 'Estou desempregado', created_at: '2019-11-05 00:40:36', updated_at: '2019-11-05 00:40:36' },
						{ id: 3, id_pergunta: 1, alternativa: 'Estou vendendo o meu corpo', created_at: '2019-11-05 00:40:36', updated_at: '2019-11-05 00:40:36' },
					]
				},
				{
					id: 2,
					id_entrevista: 1,
					pergunta: 'Teste Pergunta 02',
					tipo_aternativas: 'Objetiva/Subjetiva',
					created_at: '2019-11-05 00:40:36',
					updated_at: '2019-11-05 00:40:36',
					alternativas: [
						{ id: 4, id_pergunta: 1, alternativa: 'Estou Trabalhando na área', created_at: '2019-11-05 00:40:36', updated_at: '2019-11-05 00:40:36' },
						{ id: 5, id_pergunta: 1, alternativa: 'Estou desempregado', created_at: '2019-11-05 00:40:36', updated_at: '2019-11-05 00:40:36' },
						{ id: 6, id_pergunta: 1, alternativa: 'Estou vendendo o meu corpo', created_at: '2019-11-05 00:40:36', updated_at: '2019-11-05 00:40:36' },
						{ id: 7, id_pergunta: 1, alternativa: 'Estou vendendo o meu corpo', created_at: '2019-11-05 00:40:36', updated_at: '2019-11-05 00:40:36' },
					]
				},
				{
					id: 3,
					id_entrevista: 1,
					pergunta: 'Teste Pergunta 03',
					tipo_aternativas: 'Objetiva/Subjetiva',
					created_at: '2019-11-05 00:40:36',
					updated_at: '2019-11-05 00:40:36',
					alternativas: [
						{ id: 8, id_pergunta: 1, alternativa: 'Estou Trabalhando na área', created_at: '2019-11-05 00:40:36', updated_at: '2019-11-05 00:40:36' },
						{ id: 9, id_pergunta: 1, alternativa: 'Estou desempregado', created_at: '2019-11-05 00:40:36', updated_at: '2019-11-05 00:40:36' },
					]
				},
				{
					id: 4,
					id_entrevista: 1,
					pergunta: 'Teste Pergunta 04',
					tipo_aternativas: 'Subjetiva',
					created_at: '2019-11-05 00:40:36',
					updated_at: '2019-11-05 00:40:36',
					alternativas: [
						{ id: 10, id_pergunta: 1, alternativa: 'Estou Trabalhando na área', created_at: '2019-11-05 00:40:36', updated_at: '2019-11-05 00:40:36' },
					]
				},
			]
		};

		this.handleQuestionSelected = this.handleQuestionSelected.bind(this);
		this.handleFieldChange = this.handleFieldChange.bind(this);
	}

	handleQuestionSelected(id) {
		Axios.post('http://localhost:3001/question', { id: id }).then(result => {
			if (result.data.resultado) {
				this.setState({ interviewSelected: result.data.resultado });
				this.setState({ interviewTitle: result.data.resultado.titulo });
				this.setState({ interviewDescription: result.data.resultado.descricao });
			}
		});
	}

	handleFieldChange(event) {
		this.setState(JSON.parse(`{"${event.target.id}":"${event.target.value}"}`));
	}

	render() {
		return (
			<Container>
				<Content>
					<Form>
						<FormGroup>
							<label htmlFor="exampleInputEmail1">Título da Entrevista:</label>
							<input onChange={this.handleFieldChange} value={this.state.interviewTitle} type="text" className="form-control" id="interviewTitle" placeholder="Digite um título para a entrevista" />
						</FormGroup>

						<FormGroup>
							<label htmlFor="exampleInputPassword1">Descrição da Entrivista:</label>
							<textarea onChange={this.handleFieldChange} value={this.state.interviewDescription} className="form-control" id="descricaoEntrevista" placeholder="Digite uma breve descrição para a entrevista" rows="2"></textarea>
						</FormGroup>

						<br />

						<FormGroup>
							<a onClick="" className="btn btn-success" data-toggle="modal" href="#modalCriarPergunta"> {plusIcon} Adicionar Nova Pergunta</a>
						</FormGroup>

						<br />

						<TableQuestions dataTable={this.state.perguntas} setInterviewSelected={this.handleQuestionSelected} />

						<br />

						<FormGroup>
							<button type="submit" className="btn btn-primary">Salvar Entrevista</button>
						</FormGroup>

					</Form>

					<ModalCriarPergunta />

				</Content>
			</Container>


		);
	}
}



export default CadastroEntrevista;
