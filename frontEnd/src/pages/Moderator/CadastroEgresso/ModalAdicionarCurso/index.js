import React, { Component } from 'react';

import {
	Form,
	Modal,
	ModalDialogMedium,
	ModalContent,
	ModalHeader,
	ModalTitle,
	ModalBody,
	ModalFooter,
	ButtonCloseModal,
	Input,
	FormGroup,
	PlainTextInput,
	FormRow,
	Select,
	ButtonSuccess

} from '../../../../styles/BootstrapStyled';

import SwichButton from '../../../../components/SwichButton';

export default class extends Component {

	constructor(props) {
		super(props);
		this.state = {
			cpf: '',
			password: '',
			rememberMe: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const elementName = event.target.id;
		const elementvalue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

		this.setState({
			[elementName]: elementvalue
		});
	}

	handleSubmit(event) {

	}

	render() {
		return (
			<Modal id="modalAdicionarCurso">
				<ModalDialogMedium>
					<ModalContent>
						<Form id="modalAdicionarCursoForm" onSubmit={this.handleSubmit} >
							<ModalHeader>
								<ModalTitle>Adicionar Curso ao Egresso</ModalTitle>
								<ButtonCloseModal data-dismiss="modal">
									<span>&times;</span>
								</ButtonCloseModal>
							</ModalHeader>

							<ModalBody>
								<FormRow>

									<FormGroup columnGrid={'col-lg-12'}>
										<label htmlFor="cpf">Curso:</label>
										<Select id="idCurso" placeholder="" >
											<option value="1">Sistemas de Informação</option>
										</Select>
									</FormGroup>

								</FormRow>

								<FormRow>

									<FormGroup columnGrid={'col-lg-4'}>
										<PlainTextInput value="Concluiu o curso?" />
									</FormGroup>

									<FormGroup columnGrid={'col-lg-8'}>
										<SwichButton />
									</FormGroup>
								</FormRow>

								<FormRow>

									<FormGroup columnGrid={'col-lg-6'}>
										<label htmlFor="cpf">Ano de Início:</label>
										<Input onChange={this.handleChange} id="celular" type="text" placeholder="" />
									</FormGroup>

									<FormGroup columnGrid={'col-lg-6'}>
										<label htmlFor="cpf">Ano de Término:</label>
										<Input onChange={this.handleChange} id="celular" type="text" placeholder="" />
									</FormGroup>

								</FormRow>

							</ModalBody>

							<ModalFooter>
								<ButtonSuccess onclick={this.addCourse}>Salvar Alterações</ButtonSuccess>
							</ModalFooter>
						</Form>

					</ModalContent>
				</ModalDialogMedium>
			</Modal>
		);
	}
}

