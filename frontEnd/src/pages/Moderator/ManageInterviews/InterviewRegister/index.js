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
			editModeStatus: false,
			editModeName: 'Salvar pergunta',
			perguntas: []
		};

		this.handleQuestionSelected = this.handleQuestionSelected.bind(this);
		this.handleFieldChange = this.handleFieldChange.bind(this);
		this.handleModalDisplayingChange = this.handleModalDisplayingChange.bind(this);
		this.handleCreateQuestion = this.handleCreateQuestion.bind(this);
		this.handleSaveInterview = this.handleSaveInterview.bind(this);
		this.handleUpdateQuestion = this.handleUpdateQuestion.bind(this);
		this.handleRemoveQuestion = this.handleRemoveQuestion.bind(this);
		this.processQuestion = this.processQuestion.bind(this);
	}

	async handleSaveInterview(event) {
		event.preventDefault();
		if(this.state.perguntas.length > 0) {
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
			document.querySelector('#new-interview').dataToggle = 'collpase';
			this.setState({perguntas: []});
		}
	}

	handleCreateQuestion(newQuestion) {
		this.state.perguntas.push(this.processQuestion(newQuestion));
		this.setState({ perguntas: this.state.perguntas });
	}

	handleUpdateQuestion(question) {
		const perguntas = this.state.perguntas;
		perguntas[this.state.questionSelectedId] = this.processQuestion(question);
		this.setState({perguntas: perguntas});
	}

	handleRemoveQuestion(){
		const perguntas = this.state.perguntas;
		perguntas.splice(this.state.questionSelectedId, 1);
		this.setState({perguntas: perguntas});
	}

	processQuestion(fields) {
		const Question = {
			pergunta: '',
			alternativas: []
		};
		fields.forEach((element, index) => {
			if (index === 0) {
				Question.pergunta = element.value;
			} else {
				if (element.value && element.value !== '') {
					Question.alternativas.push(element.value);
				}
			}
		});

		return Question;
	}

	handleQuestionSelected(id) {
		this.setState({ questionSelected: this.state.perguntas[id] });
		this.setState({questionSelectedId: id});
		this.setState({ modalDisplay: true });
		this.setState({ editModeStatus: true, editModeName: 'Salvar alterações' });
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
				<Form onSubmit={this.handleSaveInterview}>
					<FormGroup>
						<label htmlFor="exampleInputEmail1">Título da Entrevista:</label>
						<Input
							onChange={this.handleFieldChange}
							value={this.state.interviewTitle}
							type="text"
							id="interviewTitle"
							placeholder="Digite um título para a entrevista"
							required
						/>
					</FormGroup>

					<FormGroup>
						<label htmlFor="interviewDescription">
              Descrição da Entrevista:
						</label>
						<Textarea
							onChange={this.handleFieldChange}
							value={this.state.interviewDescription}
							id="interviewDescription"
							placeholder="Digite uma breve descrição para a entrevista"
							rows="2"
							required
						></Textarea>
					</FormGroup>

					<br />

					<FormGroup>
						<ButtonSuccess
							type="button"
							data-toggle="modal"
							href="#modalCriarPergunta"
							onClick={event => {
								event.preventDefault();
								this.setState({
									editModeStatus: false,
									editModeName: 'Salvar pergunta'
								});
							}}
						>
							{plusIcon} ADICIONAR NOVA PERGUNTA
						</ButtonSuccess>
					</FormGroup>

					<br />

					<TableQuestions
						dataTable={this.state.perguntas}
						setQuestionSelected={this.handleQuestionSelected}
					/>

					<br />

					<FormGroup>
						<ButtonPrimary
							data-toggle="collapse"
							data-target="#new-interview"
							type="submit"
						>
              SALVAR ENTREVISTA
						</ButtonPrimary>
					</FormGroup>
				</Form>

				<ModalManageQuestion
					question={this.state.questionSelected}
					createQuestion={this.handleCreateQuestion}
					updateQuestion={this.handleUpdateQuestion}
					removeQuestion={this.handleRemoveQuestion}
					setModalDisplaying={this.handleModalDisplayingChange}
					display={this.state.modalDisplay}
					editModeStatus={this.state.editModeStatus}
					editModeName={this.state.editModeName}
				/>
			</Collapse>
		);
	}
}



export default CadastroEntrevista;
