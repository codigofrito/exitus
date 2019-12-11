import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';


import TitleBar from '../../../components/TitleBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { FormGroup, Form } from '../../../styles/BootstrapStyled';

import ModalCriarPergunta from './ModalCreateQuestion';
import TableQuestions from './TableQuestions';
import Axios from 'axios';
import localStorage from 'local-storage';

import { Container } from '../../../styles/BootstrapStyled';
import { Content } from '../../../styles/customGlobalStyled';

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
		this.handleModalDisplayingChange = this.handleModalDisplayingChange.bind(
			this
		);
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
			<Fragment>
				<TitleBar
					titulo="Cadastrar/Editar Entrevista"
					descricao="Crie ou edite entrevista."
				/>

				<Container>
					<Content>
						<Helmet>
							<title>Cadastrar/Editar Entrevista</title>
							<meta name="Crie ou edite entrevista" content="" />
						</Helmet>

						<Form>
							<FormGroup>
								<label htmlFor="exampleInputEmail1">
                  Título da Entrevista:
								</label>
								<input
									onChange={this.handleFieldChange}
									value={this.state.interviewTitle}
									type="text"
									className="form-control"
									id="interviewTitle"
									placeholder="Digite um título para a entrevista"
								/>
							</FormGroup>

							<FormGroup>
								<label htmlFor="exampleInputPassword1">
                  Descrição da Entrivista:
								</label>
								<textarea
									onChange={this.handleFieldChange}
									value={this.state.interviewDescription}
									className="form-control"
									id="interviewDescription"
									placeholder="Digite uma breve descrição para a entrevista"
									rows="2"
								></textarea>
							</FormGroup>

							<br />

							<FormGroup>
								<a
									onClick={() => {
										this.handleModalDisplayingChange(true);
									}}
									className="btn btn-success"
									data-toggle="modal"
									href="#modalCriarPergunta"
								>
									{' '}
									{plusIcon} Adicionar Nova Pergunta
								</a>
							</FormGroup>

							<br />

							<TableQuestions
								dataTable={this.state.perguntas}
								setQuestionSelected={this.handleQuestionSelected}
							/>

							<br />

							<FormGroup>
								<button
									type="button"
									className="btn btn-primary"
									onClick={this.handleSaveInterview}
								>
                  Salvar Entrevista
								</button>
							</FormGroup>
						</Form>

						<ModalCriarPergunta
							question={this.state.questionSelected}
							createQuestion={this.handleNewQuestion}
							setModalDisplaying={this.handleModalDisplayingChange}
							display={this.state.modalDisplay}
						/>
					</Content>
				</Container>
			</Fragment>
		);
	}
}



export default CadastroEntrevista;
