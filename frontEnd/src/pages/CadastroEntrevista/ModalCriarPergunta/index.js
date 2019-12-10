import React from 'react';

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
	Textarea

} from '../../../styles/BootstrapStyled';

let quantidadeAlternativas = 0;

class ModalCriarPergunta extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pergunta: '',
			alternativas: [],
			display: false
		};
		this.handleTitleChange = this.handleTitleChange.bind(this);

	}

	handleTitleChange(event) {
		this.setState({ pergunta: event.target.value });
	}


	componentDidUpdate() {
		if(this.state.display !== this.props.display) {
			console.log('DISPLAY CHANGE');
			this.setState({
				display: this.props.display
			});

			if (!this.props.display) {
				console.log('CLOSING');
				this.setState({
					pergunta: '',
					alternativas: []
				});
			} else {
				this.setState({
					pergunta: this.props.question.pergunta
				});
			}
		}
	}

	componentDidMount() {
		this.setState({display: this.props.display});
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
							<Form id="modalLoginForm">
								<FormGroup>
									<label htmlFor="pergunta">Pergunta</label>
									<Textarea
										value={this.state.pergunta}
										className="questions-modal-field"
										placeholder="Insira o texto da pergunta."
										rows="2"
										onChange={this.handleTitleChange}
									></Textarea>
								</FormGroup>

								<FormGroup>
									<Textarea
										id={'alternativa-' + ++quantidadeAlternativas}
										placeholder="Insira o texto da alternativa"
										rows="1"
										disabled
									></Textarea>
								</FormGroup>

								<FormGroup>
									<Textarea
										id={'alternativa-' + ++quantidadeAlternativas}
										placeholder="Insira o texto da alternativa"
										rows="1"
										disabled
									></Textarea>
								</FormGroup>

								<FormGroup>
									<Textarea
										id={'alternativa-' + ++quantidadeAlternativas}
										placeholder="Insira o texto da alternativa"
										rows="1"
										disabled
									></Textarea>
								</FormGroup>

								<FormGroup>
									<Textarea
										id={'alternativa-' + ++quantidadeAlternativas}
										placeholder="Insira o texto da alternativa"
										rows="1"
										disabled
									></Textarea>
								</FormGroup>

								<FormGroup>
									<Textarea
										className="form-control objetiva"
										id={'alternativa-' + ++quantidadeAlternativas}
										placeholder="Insira o texto da alternativa"
										rows="1"
										disabled
									></Textarea>
								</FormGroup>
							</Form>
						</ModalBody>

						<ModalFooter>
							<ButtonPrimary
								type="button"
								onClick={() => {
									this.props.setModalDisplaying(false);
								}}
								data-dismiss="modal"
							>
                Cancelar
							</ButtonPrimary>
							<ButtonSecondary type="button">Salvar Pergunta</ButtonSecondary>
						</ModalFooter>
					</ModalContent>
				</ModalDialogMedium>
			</Modal>
		);
	}
}

export default ModalCriarPergunta;
