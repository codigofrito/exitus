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
			display: false
		};

	}


	componentDidUpdate() {
		if(this.state.display !== this.props.display) {
			this.setState({display: this.props.display});
		}

		document.querySelectorAll('.dgdfgdf');
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
								onClick={()=>{
									// this.props.setModalDisplaying(false);
								}}
							>
								<span aria-hidden="true">&times;</span>
							</ButtonCloseModal>
						</ModalHeader>
						<ModalBody>
							<Form id="modalLoginForm" >
								<FormGroup>
									<label htmlFor="pergunta">Pergunta</label>
									<Textarea  
										defaultValue={this.props.editing
											? this.props.questionSelected.pergunta 
											: undefined} 
										className="questions-modal-field"
										placeholder="Insira o texto da pergunta." 
										rows="2"
									>
										
									</Textarea>
								</FormGroup>

								<FormGroup>
									<Textarea 
										id={'alternativa-' + (++quantidadeAlternativas)} 
										placeholder="Insira o texto da alternativa" 
										rows="1" 
										disabled
									>

									</Textarea>
								</FormGroup>

								<FormGroup>
									<Textarea 
										id={'alternativa-' + (++quantidadeAlternativas)} 
										placeholder="Insira o texto da alternativa" 
										rows="1" 
										disabled>
									</Textarea>
								</FormGroup>

								<FormGroup>
									<Textarea 
										id={'alternativa-' + (++quantidadeAlternativas)} 
										placeholder="Insira o texto da alternativa" 
										rows="1" 
										disabled>
									</Textarea>
								</FormGroup>

								<FormGroup>
									<Textarea 
										id={'alternativa-' + (++quantidadeAlternativas)} 
										placeholder="Insira o texto da alternativa" 
										rows="1" 
										disabled>
									</Textarea>
								</FormGroup>

								<FormGroup>
									<Textarea 
										className="form-control objetiva" 
										id={'alternativa-' + (++quantidadeAlternativas)} 
										placeholder="Insira o texto da alternativa" 
										rows="1" 
										disabled>
									</Textarea>
								</FormGroup>
							</Form>
						</ModalBody>

						<ModalFooter>
							<ButtonPrimary 
								type="button" 
								onClick={()=>{
									// this.props.setModalDisplaying(false);
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
