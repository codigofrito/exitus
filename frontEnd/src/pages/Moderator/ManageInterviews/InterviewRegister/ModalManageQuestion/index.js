import React, { Component } from 'react';

import {
	Modal,
	ModalDialogMedium,
	ModalContent,
	ModalHeader,
	ModalTitle,
	ModalBody,
	ModalFooter,
	ButtonCloseModal,
	Form,
	FormGroup,
	ButtonPrimary,
	ButtonSecondary,
	Textarea,
	ButtonDanger

} from '../../../../../styles/BootstrapStyled';


export default class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pergunta: '',
			display: false
		};
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleCreateQuestion = this.handleCreateQuestion.bind(this);

	}

	handleTitleChange(event) {
		this.setState({ pergunta: event.target.value });
	}

	handleCreateQuestion() {
		const fields = document.querySelectorAll('.create-question-field');
		const alternatives = [];
		fields.forEach((field, index) => {
			if (index > 0) {
				if(field.value && field.value !== '') {
					alternatives.push(field);
				}
			}
		});
		if(fields[0].value && fields[0].value !== '' && alternatives.length>= 2) {
			this.props.createQuestion(fields);
		}
	}

	componentDidUpdate() {
		if (this.state.display !== this.props.display) {
			console.log('DISPLAY CHANGE');
			this.setState({
				display: this.props.display
			});

			if (!this.props.display) {
				console.log('CLOSING');
				this.setState({
					pergunta: '',
				});
			} else {
				this.setState({
					pergunta: this.props.question.pergunta
				});
			}
		}
	}

	componentDidMount() {
		this.setState({ display: this.props.display });
	}

	render() {
		return (
			<Modal id="modalCriarPergunta">
				<ModalDialogMedium>
					<ModalContent>
						<ModalHeader>
							<ModalTitle>Criar Nova Pergunta</ModalTitle>
							<ButtonCloseModal
								type="button"
								data-dismiss="modal"
								onClick={() => {
									this.props.setModalDisplaying(false);
								}}
							>
								<span aria-hidden="true">&times;</span>
							</ButtonCloseModal>
						</ModalHeader>
						<ModalBody>
							<Form id="modalCriarPergunta">
								<FormGroup>
									<label htmlFor="pergunta">Pergunta</label>
									<Textarea
										id="question-field"
										value={this.state.pergunta}
										className="questions-modal-field create-question-field"
										placeholder="Insira o texto da pergunta."
										rows="2"
										onChange={this.handleTitleChange}
									></Textarea>
								</FormGroup>

								<FormGroup>
									<Textarea
										id="alternative-field-0"
										className="create-question-field"
										placeholder="Insira o texto da alternativa"
										rows="1"
									></Textarea>
								</FormGroup>

								<FormGroup>
									<Textarea
										id="alternative-field-1"
										className="create-question-field"
										placeholder="Insira o texto da alternativa"
										rows="1"
									></Textarea>
								</FormGroup>

								<FormGroup>
									<Textarea
										id="alternative-field-2"
										className="create-question-field"
										placeholder="Insira o texto da alternativa"
										rows="1"
									></Textarea>
								</FormGroup>

								<FormGroup>
									<Textarea
										id="alternative-field-3"
										className="create-question-field"
										placeholder="Insira o texto da alternativa"
										rows="1"
									></Textarea>
								</FormGroup>

								<FormGroup>
									<Textarea
										className="create-question-field"
										id="alternative-field-4"
										placeholder="Insira o texto da alternativa"
										rows="1"
									></Textarea>
								</FormGroup>
							</Form>
						</ModalBody>

						<ModalFooter>

							<ButtonDanger type="button" onClick={this.handleCreateQuestion}>
								Deletar Pergunta
							</ButtonDanger>

							<ButtonSecondary type="button"
								onClick={() => { this.props.setModalDisplaying(false); }}
								data-dismiss="modal">Cancelar
							</ButtonSecondary>

							<ButtonPrimary type="button" onClick={this.handleCreateQuestion}>
								Criar pergunta
							</ButtonPrimary>
						</ModalFooter>
					</ModalContent>
				</ModalDialogMedium>
			</Modal>
		);
	}
}

