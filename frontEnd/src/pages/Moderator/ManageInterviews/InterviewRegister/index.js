import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import {
	FormGroup,
	Form,
	Collapse,
	Input,
	Textarea,
	ButtonPrimary,
	ButtonSuccess
} from '../../../../styles/BootstrapStyled';

import ModalManageQuestion from './ModalManageQuestion';
import TableQuestions from './QuestionsTable';
import Axios from 'axios';
import localStorage from 'local-storage';

const plusIcon = <FontAwesomeIcon icon={faPlusCircle} />;

class CadastroEntrevista extends Component {
	constructor(props) {

		super(props);
		this.state = {
			questionSelected: '',
			modalDisplay: false,
			perguntas: []
		};

		this.handleQuestionSelected = this.handleQuestionSelected.bind(this);
		this.handleFieldChange = this.handleFieldChange.bind(this);
		this.handleModalDisplayingChange = this.handleModalDisplayingChange.bind(this);
		this.handleNewQuestion = this.handleNewQuestion.bind(this);
		this.handleSaveInterview = this.handleSaveInterview.bind(this);
	}

	async handleSaveInterview(event) {
		event.preventDefault();
		await Axios.post(
			'http://localhost:3001/register/interview',
			{
				cpf_moderador: localStorage.get('user').cpf,
				titulo: this.state.interviewTitle,
				descricao: this.state.interviewDescription,
				perguntas: this.state.perguntas.map(pergunta => {
					return pergunta.pergunta;
				}),
				alternativas: this.state.perguntas.map(pergunta => {
					return pergunta.alternativas;
				})
			},
			{ headers: { token: `bearer ${localStorage.get('TOKEN_KEY')}` } }
		);
	}

	handleNewQuestion(newQuestion) {
		const Question = {
			pergunta: '',
			alternativas: []
		};
		newQuestion.forEach((element, index) => {
			if (index == 0) {
				Question.pergunta = element.value;
			} else {
				if (element.value && element.value !== '') {
					Question.alternativas.push(element.value);
				}
			}
		});

		this.state.perguntas.push(Question);
		this.setState({ perguntas: this.state.perguntas });
	}

	handleQuestionSelected(id) {
		this.setState({ questionSelected: this.state.perguntas[id] });
		this.setState({ modalDisplay: true });
	}

	handleFieldChange(event) {
		this.setState(JSON.parse(`{"${event.target.id}":"${event.target.value}"}`));
	}

	handleModalDisplayingChange(displayStatus) {
		this.setState({ modalDisplay: displayStatus });
		if (!displayStatus) {
			this.setState({ questionSelected: '' });
		}
	}

	render() {
		return (

			<Collapse id="new-interview">
				<br /><hr /><br />
				<Form onSubmit={this.handleSaveInterview}>
					<FormGroup>
						<label htmlFor="exampleInputEmail1">Título da Entrevista:</label>
						<Input onChange={this.handleFieldChange}
							value={this.state.interviewTitle} type="text"
							id="interviewTitle"
							placeholder="Digite um título para a entrevista" required />
					</FormGroup>

					<FormGroup>
						<label htmlFor="interviewDescription">Descrição da Entrevista:</label>
						<Textarea
							onChange={this.handleFieldChange}
							value={this.state.interviewDescription}
							id="interviewDescription"
							placeholder="Digite uma breve descrição para a entrevista"
							rows="2"
						></Textarea>
					</FormGroup>

					<br />

					<FormGroup>
						<ButtonSuccess type="button" data-toggle="modal" href="#modalCriarPergunta">
							{plusIcon} ADICIONAR NOVA PERGUNTA
							</ButtonSuccess>
					</FormGroup>

					<br />

					<TableQuestions dataTable={this.state.perguntas} setQuestionSelected={this.handleQuestionSelected} />

					<br />

					<FormGroup>
						<ButtonPrimary type="submit">SALVAR ENTREVISTA</ButtonPrimary>
					</FormGroup>

				</Form>

				<ModalManageQuestion
					question={this.state.questionSelected}
					createQuestion={this.handleNewQuestion}
					setModalDisplaying={this.handleModalDisplayingChange}
					display={this.state.modalDisplay}
				/>
			</Collapse>
		);
	}
}



export default CadastroEntrevista;
